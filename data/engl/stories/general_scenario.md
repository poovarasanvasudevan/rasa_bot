
## start
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
 
## ad password resets
* ad_account_password_reset
    - utter_ask_full_name_or_username
 
## call agent story
* human_handoff
    - utter_call_agent
    
## Generated Story 6997231544442642088
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"username": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"CONTACT_NUMBER": "897-096-8890"}
    - slot{"CONTACT_NUMBER": "897-096-8890"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT_67"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye

## Generated Story 8145470606194884449
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"USERNAME": "_"}
    - slot{"USERNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
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

## Generated Story 814547060619488498
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"USERNAME": "_"}
    - slot{"USERNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
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


## Generated Story fullname
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"CONTACT_NUMBER": "897-096-8890"}
    - slot{"CONTACT_NUMBER": "897-096-8890"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT_67"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye

## Generated Story 8145470606194884449
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
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

## Generated Story 814547060619488498
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
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
