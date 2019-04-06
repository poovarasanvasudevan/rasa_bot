from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals
import logging

import pickle
import uuid

import logging
import inspect, os, sys
from flask_cors import CORS

from rasa_core.tracker_store import TrackerStore
from rasa_core import utils
from rasa_core.agent import Agent
from rasa_core.domain import Domain, TemplateDomain
from rasa_core.events import SlotSet
from rasa_core.trackers import DialogueStateTracker
from rasa_core.tracker_store import MongoTrackerStore, TrackerStore, InMemoryTrackerStore, RedisTrackerStore
from rasa_core.interpreter import (NaturalLanguageInterpreter, RasaNLUInterpreter)
from rasa_core.channels.channel import UserMessage
from flask import Blueprint, request, jsonify, Flask, render_template
from rasa_core.utils import EndpointConfig

# connect to MongoDb from local network
import pymongo
from pymongo import MongoClient

mongo_service = "localhost"
redis_service = "localhost"

client = MongoClient('mongodb://{}:27017/'.format(mongo_service))
db = client.simba
domain = TemplateDomain.load("../models/engl/dialogue/domain.yml")

mongo_tracker_store = MongoTrackerStore(domain=domain, host="mongodb://{}".format(mongo_service), db="main")
redis_store = RedisTrackerStore(domain, host=redis_service, port=6379)

# Agent number one
interpreter = RasaNLUInterpreter('../models/nlu/engl')

action_endpoint = EndpointConfig(url="http://localhost:5055/webhook")
tracker_store = RedisTrackerStore(domain, host="localhost", port=6379, db=13)

engl_agent = Agent.load("../models/engl/dialogue",
                        interpreter=interpreter,
                        tracker_store=mongo_tracker_store,
                        action_endpoint=action_endpoint)

# Agent number two
# interpreter = RasaNLUInterpreter('./models/nlu/Auto/Auto')
# domain = TemplateDomain.load("models/dialogue/domain.yml")
# action_endpoint = EndpointConfig(url="http://localhost:5055/webhook")
# tracker_store = RedisTrackerStore(domain,host="localhost", port=6379, db= 13)

# agent_two = Agent.load('domain',
#                        interpreter=interpreter,
#                        tracker_store=mongo_tracker_store,
#                        action_endpoint=action_endpoint)
#
# start the server
app = Flask(__name__)
CORS(app)


def switch_agent(argument):
    switcher = {
        "engl_agent": engl_agent,
    }
    return switcher.get(argument, "Invalid agent name.")


@app.route('/sendMessage')
def new_message():
    message = str(request.args.get('message'))
    current_agent_name = str(request.args.get('agent'))
    sender_id = str(request.args.get('userid'))

    current_agent = switch_agent(current_agent_name)
    bot_response = current_agent.handle_text(text_message=message, sender_id=sender_id)

    return jsonify(bot_response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3322,debug=True, use_reloader=False)
