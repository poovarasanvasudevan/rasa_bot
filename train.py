from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import argparse
import warnings

from rasa_nlu.training_data import load_data
from rasa_nlu import config
from rasa_nlu.model import Trainer

from rasa_core import utils
from rasa_core.agent import Agent
from rasa_core.policies.keras_policy import KerasPolicy
from rasa_core.policies.memoization import MemoizationPolicy

from rasa_nlu.components import ComponentBuilder


def train_nlu():
    builder = ComponentBuilder(use_cache=True)
    training_data = load_data('data/nlu_data.md')
    trainer = Trainer(config.load("config.yml"), builder)
    trainer.train(training_data)
    model_directory = trainer.persist('models/nlu/', fixed_model_name="current")
    return model_directory


def train_dialogue(
        domain_file="domain.yml",
        model_path="models/dialogue",
        training_data_file="data/stories.md"
):
    agent = Agent(domain_file,policies = [MemoizationPolicy(), KerasPolicy(max_history=3, epochs=200, batch_size=50)])
    training_data = agent.load_data(training_data_file, )
    agent.train(
        training_data,
        epochs=200,
        batch_size=100,
        validation_split=0.2
    )
    agent.persist(model_path)
    return agent


def train_all():
    model_directory = train_nlu()
    agent = train_dialogue()
    return [model_directory, agent]


if __name__ == '__main__':
    warnings.filterwarnings(action='ignore', category=DeprecationWarning)
    utils.configure_colored_logging(loglevel="INFO")

    parser = argparse.ArgumentParser(
        description='starts the bot training')

    parser.add_argument(
        'task',
        choices=["train-nlu", "train-dialogue", "train-all"],
        help="what the bot should do?")
    task = parser.parse_args().task

    # decide what to do based on first parameter of the script
    if task == "train-nlu":
        train_nlu()
    elif task == "train-dialogue":
        train_dialogue()
    elif task == "train-all":
        train_all()
