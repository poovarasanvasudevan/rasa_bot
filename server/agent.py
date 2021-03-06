from rasa_core.agent import Agent
from rasa_core.interpreter import RasaNLUInterpreter
from rasa_core.utils import EndpointConfig

from rasa_core.channels.socketio import SocketIOInput
from rasa_core.agent import Agent
from rasa_core.interpreter import RegexInterpreter

nlu_interpreter = RasaNLUInterpreter('../models/nlu/engl')
action_endpoint = EndpointConfig(url="http://localhost:5055/webhook")
agent = Agent.load('../models/engl/dialogue', interpreter=nlu_interpreter, action_endpoint=action_endpoint)
input_channel = SocketIOInput(
    user_message_evt="user_uttered",
    bot_message_evt="bot_uttered",
    namespace=None
)

s = agent.handle_channels([input_channel], 5004, serve_forever=True)
