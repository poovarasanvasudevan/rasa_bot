import logging
from datetime import datetime
from typing import Text, Dict, Any, List
import json

from rasa_core_sdk import Action, Tracker
from rasa_core_sdk.executor import CollectingDispatcher
from rasa_core_sdk.forms import FormAction
from rasa_core_sdk.events import SlotSet, UserUtteranceReverted, ConversationPaused, FollowupAction, Form

logger = logging.getLogger(__name__)

valid_user_names = ['ramasamy.kulathu', 'poovarasan.v', 'raj.kulathu']
valid_full_names = ['ramasamy kulathu', 'poovarasan vasudevan', 'Rajsekar kulathu']
valid_badge_id = ['1234', '1233', '0089']
temporary_password = 'Temp@Pas90'
valid_ssn_number = ['1234', '4444', '9987']
valid_dob = []


class ActionVerifyUsername(Action):
    def name(self):
        return 'action_verify_username'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        username = next(tracker.get_latest_entity_values("USERNAME"), None)
        is_user_name_verified = False

        # call apis/RPA to verify username
        if username is not None and username.lower() in valid_user_names:
            is_user_name_verified = True

        return [SlotSet('USER_NAME_VERIFIED', is_user_name_verified)]


class ActionVerifyFullName(Action):
    def name(self):
        return 'action_verify_fullname'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        fullname = next(tracker.get_latest_entity_values("FULLNAME"))
        is_full_name_verified = False

        # call APIS/RPA  to verify fullname
        if fullname is not None and fullname.lower() in valid_full_names:
            is_full_name_verified = True

        return [SlotSet('FULL_NAME_VERIFIED', is_full_name_verified)]


class ActionVerifyBadgeID(Action):
    def name(self):
        return 'action_verify_badgeid'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        badgeid = next(tracker.get_latest_entity_values("BADGEID"))
        is_badge_id_verified = False

        # call APIS/RPA to verify badgeid
        if badgeid is not None and badgeid.lower() in valid_badge_id:
            is_badge_id_verified = True

        return [SlotSet('BADGE_ID_VERIFIED', is_badge_id_verified)]


class ActionVerifyDOB(Action):
    def name(self):
        return 'action_verify_dob'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        pass


class ActionVerifySSN(Action):
    def name(self):
        return 'action_verify_ssn'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        pass


class ActionResetPassword(Action):
    def name(self):
        return 'action_do_password_reset'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        # call API / RPA for resetting password
        return [SlotSet('TEMPORARY_PASSWORD', temporary_password)]
