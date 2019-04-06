## greeting
* greetings
- utter_greetings

## good bye
* bye
- utter_bye

## Generated Story -3537417073781679711
* password_reset
    - utter_say_need_verification
    - utter_ask_username
* set_usename
    - action_verify_username
    - slot{"USER_NAME_VERIFIED": true}
    - slot{"USERNAME": "poovarasan.v"}
    - utter_ask_fullname
* set_fullname
    - action_verify_fullname
    - slot{"FULL_NAME_VERIFIED": true}
    - slot{"FULLNAME": "poovarasan vasudevan"}
    - utter_ask_badgeid
* set_badgeid
    - action_verify_badgeid
    - slot{"BADGE_ID_VERIFIED": true}
    - slot{"BADGEID": "1234"}
    - utter_verification_success
    - utter_ask_for_password_reset
* confirm_password_reset{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - slot{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - action_do_password_reset
    - slot{"TEMPORARY_PASSWORD": "Temp@Pas90"}
    - utter_say_temporary_password
    - utter_bye

## Generated Story -3537417073781679712
* password_reset
    - utter_say_need_verification
    - utter_ask_username
* set_usename{"USERNAME": "poovarasan.v"}
    - action_verify_username
    - slot{"USER_NAME_VERIFIED": true}
    - slot{"USERNAME": "poovarasan.v"}
    - utter_ask_fullname
* set_fullname{"FULLNAME": "poovarasan vasudevan"}
    - action_verify_fullname
    - slot{"FULL_NAME_VERIFIED": true}
    - slot{"FULLNAME": "poovarasan vasudevan"}
    - utter_ask_badgeid
* set_badgeid{"BADGEID": "1234"}
    - action_verify_badgeid
    - slot{"BADGE_ID_VERIFIED": true}
    - slot{"BADGEID": "1234"}
    - utter_verification_success
    - utter_ask_for_password_reset
* confirm_password_reset{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - slot{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - action_do_password_reset
    - slot{"TEMPORARY_PASSWORD": "Temp@Pas90"}
    - utter_say_temporary_password
    - utter_bye
## Generated Story 7706658707344784413
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_say_need_verification
    - utter_ask_username
* set_usename{"USERNAME": "poovarasan.v"}
    - slot{"USERNAME": "poovarasan.v"}
    - action_verify_username
    - slot{"USER_NAME_VERIFIED": true}
    - slot{"USERNAME": "poovarasan.v"}
    - utter_ask_fullname
* set_fullname
    - action_verify_fullname
    - slot{"FULL_NAME_VERIFIED": true}
    - slot{"FULLNAME": "poovarasan vasudevan"}
    - utter_ask_badgeid
* set_badgeid
    - action_verify_badgeid
    - slot{"BADGE_ID_VERIFIED": false}
    - slot{"BADGEID": "90880"}
    - utter_verification_failed
    - utter_ask_for_alternative_verification
* confirm_alternative_verification{"ALTERNATIVE_VERIFICATION_CONFIRMATION": "positive"}
    - slot{"ALTERNATIVE_VERIFICATION_CONFIRMATION": "positive"}
    - utter_ask_dob
* set_dob
    - action_verify_dob
    - slot{"DOB_VERIFIED": true}
    - utter_ask_ssn
* set_ssn
    - action_verify_ssn
    - slot{"SSN_VERIFIED": true}
    - utter_verification_success
    - utter_ask_for_password_reset
* confirm_password_reset{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - slot{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - action_do_password_reset
    - slot{"TEMPORARY_PASSWORD": "Temp@Pas90"}
    - utter_say_temporary_password
    - utter_bye

## Generated Story 6133634457923342834
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_say_need_verification
    - utter_ask_username
* set_usename
    - action_verify_username
    - slot{"USER_NAME_VERIFIED": false}
    - slot{"USERNAME": "iampoosan.v"}
    - utter_ask_fullname
* set_fullname
    - action_verify_fullname
    - slot{"FULL_NAME_VERIFIED": true}
    - slot{"FULLNAME": "ramasamy kulathu"}
    - utter_ask_badgeid
* set_badgeid
    - action_verify_badgeid
    - slot{"BADGE_ID_VERIFIED": false}
    - slot{"BADGEID": "08732"}
    - utter_verification_failed
    - utter_ask_for_alternative_verification
* confirm_alternative_verification{"ALTERNATIVE_VERIFICATION_CONFIRMATION": "negative"}
    - slot{"ALTERNATIVE_VERIFICATION_CONFIRMATION": "negative"}
    - utter_say_cannot_procceed_further
    - utter_ask_can_i_help_anything_else
* confirm_anything_else{"HELP_ANYTHING": "positive"}
    - slot{"HELP_ANYTHING": "positive"}
    - action_restart

## Generated Story -93007437629241544
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_say_need_verification
    - utter_ask_username
* set_usename
    - action_verify_username
    - slot{"USER_NAME_VERIFIED": false}
    - slot{"USERNAME": "poovarasan.vasu"}
    - utter_ask_fullname
* set_fullname
    - action_verify_fullname
    - slot{"FULL_NAME_VERIFIED": true}
    - slot{"FULLNAME": "poovarasan vasudevan"}
    - utter_ask_badgeid
* set_badgeid
    - action_verify_badgeid
    - slot{"BADGE_ID_VERIFIED": true}
    - slot{"BADGEID": "1234"}
    - utter_verification_failed
    - utter_ask_for_alternative_verification
* confirm_alternative_verification{"ALTERNATIVE_VERIFICATION_CONFIRMATION": "positive"}
    - slot{"ALTERNATIVE_VERIFICATION_CONFIRMATION": "positive"}
    - utter_ask_dob
* set_dob{"DOB": "august 12"}
    - slot{"DOB": "august 12"}
    - action_verify_dob
    - slot{"DOB_VERIFIED": true}
    - utter_ask_ssn
* set_ssn
    - action_verify_ssn
    - slot{"SSN_VERIFIED": true}
    - utter_verification_success
    - utter_ask_for_password_reset
* confirm_password_reset{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - slot{"PASSSWORD_RESET_CONFIRMATION": "positive"}
    - action_do_password_reset
    - slot{"TEMPORARY_PASSWORD": "Temp@Pas90"}
    - utter_say_temporary_password
    - utter_ask_can_i_help_anything_else
* confirm_anything_else{"HELP_ANYTHING": "negative"}
    - slot{"HELP_ANYTHING": "negative"}
    - utter_bye

