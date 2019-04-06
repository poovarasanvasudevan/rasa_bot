## Generated Story -4735582009133212031
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "paul, joel"}
    - slot{"FULLNAME": "paul, joel"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "paul, joel"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "poovarasan.v"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "12345"}
    - slot{"BADGEID": "12345"}
    - action_verify_badge_id
    - slot{"BADGEID": "12345"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT1234567"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye

## Generated Story namae not found locked
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "paul, joel"}
    - slot{"FULLNAME": "paul, joel"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "paul, joel"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "poovarasan.v"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "12345"}
    - slot{"BADGEID": "12345"}
    - action_verify_badge_id
    - slot{"BADGEID": "12345"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "@"}
    - utter_say_temporary_password
* thank
    - utter_bye

## Generated Story namae not found no_problem
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "paul, joel"}
    - slot{"FULLNAME": "paul, joel"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "paul, joel"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "poovarasan.v"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "12345"}
    - slot{"BADGEID": "12345"}
    - action_verify_badge_id
    - slot{"BADGEID": "12345"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "@"}
    - utter_say_temporary_password
* thank
    - utter_bye

