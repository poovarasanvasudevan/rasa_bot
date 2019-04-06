from rasa_nlu.components import Component
from rasa_nlu import utils
from rasa_nlu.model import Metadata
import logging
import re

logger = logging.getLogger(__name__)

fullname_regex = '[A-Za-z]{2,}, [A-Za-z]{2,}'
badgeid_regex = '[0-9]{5}'
dob_regex = '(0?[1-9]|1[0-2]){1}\/(0?[1-9]|1[0-9]|2[0-9]|3[0-1]){1}'
ssn_regex = '[0-9]{4}'
contact_number_regex = '[0-9]{3}-[0-9]{3}-[0-9]{4}'

from re import finditer


def convert_to_rasa(value, confidence, enty, start, end):
    """Convert model output into the Rasa NLU compatible output format."""

    entity = {"value": value,
              "confidence": confidence,
              "entity": enty,
              "start": start,
              "end": end,
              "extractor": "sentiment_extractor"}

    return entity


class SingleWordEntityExtractor(Component):
    name = "servicefocus_ner"
    provides = ["entities"]

    def __init__(self, component_config=None):
        super(SingleWordEntityExtractor, self).__init__(component_config)

    def process(self, message, **kwargs):
        for match in finditer(fullname_regex, message.text):
            entity = convert_to_rasa(match.group(), 1.0, 'FULLNAME', match.span()[0], match.span()[1])
            message.set("entities", [entity], add_to_output=True)

        for match in finditer(dob_regex, message.text):
            entity = convert_to_rasa(match.group(), 1.0, 'DOB_SSN', match.span()[0], match.span()[1])
            message.set("entities", [entity], add_to_output=True)

        for match in finditer(badgeid_regex, message.text):
            entity = convert_to_rasa(match.group(), 1.0, 'BADGEID', match.span()[0], match.span()[1])
            message.set("entities", [entity], add_to_output=True)

        for match in finditer(contact_number_regex, message.text):
            entity = convert_to_rasa(match.group(), 1.0, 'CONTACT_NUMBER', match.span()[0], match.span()[1])
            message.set("entities", [entity], add_to_output=True)
