import logging
import string
import random
import re
import time
from duckling import DucklingWrapper
from dateutil import parser
from rasa_core_sdk import Action, Tracker
from rasa_core_sdk.executor import CollectingDispatcher
from rasa_core_sdk.forms import FormAction
from rasa_core_sdk.events import SlotSet, UserUtteranceReverted, ConversationPaused, FollowupAction, Form
from core.duckling import Duckling

logger = logging.getLogger(__name__)
logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')

valid_full_names = ['vasudevan, poovarasan', 'kulathu, ramasamy', 'kulathu, raj']
valid_username = ['ram.kulathu', 'poovarasan.v', 'raj.kulathu']
valid_badge_id = ['12345', '12444', '12333']

locked_account_username = 'ram.kulathu'
locked_account_fullname = 'kulathu, ramasamy'

expired_account_username = 'poovarasan.v'
expired_account_fullname = 'vasudevan, poovarasan'

valid_account_username = 'raj.kulathu'
valid_account_fullname = 'kulathu, raj'

valid_dob = ['11/11', '01/01', '09/09']
valid_ssn = ['1234', '1111', '4433']

fullname_regex = '[A-Za-z]{2,}, [A-Za-z]{2,}'


def random_string_digits(stringLength=8):
    """Generate a random string of letters and digits """
    lettersAndDigits = string.ascii_letters + string.digits
    return ''.join(random.choice(lettersAndDigits) for i in range(stringLength))


class ActionVerifyFullnameOrUsername(Action):

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        user_entered = None
        user_detail_slot = None
        user_verification_slot = None
        last_message = tracker.latest_message.get('text')

        grp = re.search(fullname_regex, last_message)

        if grp is not None:
            last_message = grp[0]

        # call RPA to verify username or fullname
        if ',' in last_message:
            user_entered = 'fullname'
            user_detail_slot = SlotSet('FULLNAME', last_message)
            if last_message in valid_full_names:
                user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'FOUND')
            else:
                user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'NAME_NOT_FOUND')
        else:
            user_entered = 'username'
            user_detail_slot = SlotSet('USERNAME', last_message)
            if last_message in valid_username:
                user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'FOUND')
            else:
                user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'USERNAME_NOT_FOUND')

        return [SlotSet('USER_TYPED_FULLNAME_OR_USERNAME', user_entered), user_detail_slot, user_verification_slot]

    def name(self):
        return 'action_verify_fullname_or_username'


class ActionVerifyFullname(Action):
    def name(self):
        return 'action_verify_fullname'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):

        time.sleep(5)
        last_message = tracker.latest_message.get('text')

        grp = re.search(fullname_regex, last_message)

        if grp is not None:
            last_message = grp[0]

        user_detail_slot = SlotSet('USERNAME', last_message)
        if tracker.latest_message.get('text') in valid_full_names:
            user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'found')
        else:
            user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'name_not_found')

        return [user_detail_slot, user_verification_slot]


class ActionVerifyUsername(Action):
    def name(self):
        return 'action_verify_username'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        time.sleep(5)
        user_detail_slot = SlotSet('FULLNAME', tracker.latest_message.get('text'))
        if tracker.latest_message.get('text') in valid_username:
            user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'found')
        else:
            user_verification_slot = SlotSet('USER_VERIFICATION_RESULT', 'username_not_found')

        return [user_detail_slot, user_verification_slot]


class ActionVerifyBadgeID(Action):

    def name(self):
        return 'action_verify_badge_id'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        time.sleep(5)
        badge_id = tracker.latest_message.get('text')
        is_badgeid_valid = False
        if badge_id in valid_badge_id:
            is_badgeid_valid = True

        return [SlotSet('BADGEID', badge_id), SlotSet('BADGEID_VALID', is_badgeid_valid)]


class ActionCheckAccountProblem(Action):

    def name(self):
        return 'action_check_account_problem'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):

        can_reset_password = False
        account_status = None
        usernameorfullname = None

        user_entered = tracker.get_slot('USER_TYPED_FULLNAME_OR_USERNAME')
        time.sleep(5)
        if user_entered == 'username':
            username = tracker.get_slot('USERNAME')
            if username in valid_username:
                account_status = 'no_problem'
            if username in locked_account_username:
                account_status = 'locked'
            if username in expired_account_username:
                account_status = 'expired'

        elif user_entered == 'fullname':
            fullname = tracker.get_slot('FULLNAME')

            if fullname in valid_full_names:
                account_status = 'no_problem'
            if fullname in locked_account_fullname:
                account_status = 'locked'
            if fullname in expired_account_fullname:
                account_status = 'expired'

        logger.debug(usernameorfullname)
        logger.debug('account status : '.join(account_status))
        return [SlotSet('ACCOUNT_PROBLEM', account_status)]


class ActionResetProblem(Action):

    def name(self):
        return 'action_do_password_reset'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        lettersAndDigits = string.ascii_letters + string.digits
        temp_pass = ''.join(random.choice(lettersAndDigits) for i in range(8))
        return [SlotSet('TEMP_PASSWORD', temp_pass.join('@'))]


class ActionCreatePTForExpiredAccount(Action):

    def name(self):
        return 'action_create_pt_expired_account'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        return [SlotSet('EXPIRED_ACCOUNT_PT_NUMBER', 'PT1234567')]


class ActionCreateTicketOnVerificationFailed(Action):
    def name(self):
        return 'action_create_pt_for_verification_failed'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):
        user_message = tracker.latest_message.get('text')
        time.sleep(5)
        return [SlotSet('VERIFICATION_FAILED_TICKET_NUMBER', 'PT1234564357')]


class ActionVerifyDOBSSN(Action):
    __d = None

    def __init__(self):
        self.__d = Duckling.getInstance()

    def name(self):
        return 'action_verify_dob_ssn'

    def run(self,
            dispatcher,  # type: CollectingDispatcher
            tracker,  # type: Tracker
            domain  # type:  Dict[Text, Any]
            ):

        dob_ssn_verified = False
        entered_slot = None
        is_second_verification = False

        is_second_verification_t = tracker.get_slot("DOB_VERIFIED")
        if is_second_verification_t is not None and is_second_verification_t is False:
            is_second_verification = True

        if '/' in tracker.latest_message.get('text'):
            entered_slot = SlotSet('DOB_SSN_ENTERED', 'DOB')
            # extract date

            parsed_time = self.__d.parse_time(tracker.latest_message.get('text'))

            if len(parsed_time) is not 0:
                time = list(filter(lambda x: x.get('dim') == 'time', parsed_time))
                if time is not None and len(time) == 1:
                    date = parser.parse(time[0].get('value').get('value'))
                    if str(date.day).join('/').join(str(date.month)) in valid_dob:
                        dob_ssn_verified = False
                    else:
                        dob_ssn_verified = False
            else:
                dob_ssn_verified = False
        else:
            entered_slot = SlotSet('DOB_SSN_ENTERED', 'SSN')
            if tracker.latest_message.get('text') in valid_ssn:
                dob_ssn_verified = True

        return [
            SlotSet('IS_SECOND_DOB_SSN_VERIFICATION', is_second_verification),
            entered_slot,
            SlotSet('DOB_SSN', tracker.latest_message.get('text')),
            SlotSet('DOB_VERIFIED', dob_ssn_verified)
        ]
