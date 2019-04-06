## password reset
* password_reset
    - utter_ask_what_kind_of_account
    
## ad password reset
* ad_account_password_reset
    - utter_ask_full_name_or_username

## expired accoutn user not giving contact details
* expired_account_user_not_provided_contact_info{"ACCOUNT_PROBLEM": "expired"}
    - utter_action_quit_with_client_voice


## ad password reset identified fullname
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"USERNAME":"_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "found"}
    - utter_user_found_ask_badge_id
    
## not identitfied fullname
* set_ad_username_or_fullname{"FULLNAME":"_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "found"}
    - utter_user_found_ask_badge_id

##username not found
* set_ad_username_or_fullname
    - utter_ask_fullname
    
## badgeid found no problem
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found","BADGEID":"_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "_"}
    - utter_say_temporary_password
    
## badgeid found locked
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found","BADGEID":"_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "_"}
    - utter_say_temporary_password

## badgeid found expired
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found","BADGEID":"_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"ACCOUNT_PROBLEM": "expired"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "_"}
    - utter_say_ticket_generated_for_expired_account

## expired accoutn user giving contact number create ticket
* set_ad_contact_number{"ACCOUNT_PROBLEM": "expired"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "_"}
    - utter_say_ticket_generated_for_expired_account
    
## Generated Story 9160574428420078934
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "kulathu, raj"}
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
    - slot{"ACCOUNT_PROBLEM": "NO_PROBLEM"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "@"}
    - utter_say_temporary_password
