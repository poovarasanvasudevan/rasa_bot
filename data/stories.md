## greeting
* greetings
- utter_greetings

## how are you
* how_are_you
- utter_how_i_am

## good bye
* bye
- utter_bye

## my name is
* my_name_is
    - utter_its_nice_to_meet_you
* greetings
    - utter_greetings
* bye
    - utter_bye


## Generated Story 7815682505770089447
* password_reset
    - utter_ask_for_problem
* set_user_problem
    - utter_ask_for_password_reset
* confirm_password_reset{"PASSWORD_RESET_CONFIRMATION": "positive"}
    - utter_say_need_verification
    - utter_ask_username
* set_usename{"USERNAME": "poovarasan.v"}
    - slot{"USERNAME": "poovarasan.v"}
    - action_verify_username
    - slot{"USER_NAME_VERIFIED": true}
    - utter_ask_fullname
* set_fullname{"FULLNAME": "poovarasan vasudevan"}
    - slot{"FULLNAME": "poovarasan vasudevan"}
    - action_verify_fullname
    - slot{"FULL_NAME_VERIFIED": true}
    - utter_ask_badgeid
* set_badgeid{"BADGEID": "1234"}
    - slot{"BADGEID": "1234"}
    - action_verify_badgeid
    - slot{"BADGE_ID_VERIFIED": true}
    - utter_verification_success
    - utter_say_temporary_password
    - utter_bye

