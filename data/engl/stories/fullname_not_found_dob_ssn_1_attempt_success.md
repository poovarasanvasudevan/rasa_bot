## Generated Story 1619108541597455368 ssn no _problem
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "andrews, jackson"}
    - slot{"FULLNAME": "andrews, jackson"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "andrews, jackson"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname{"USERNAME": "raj.kulathu"}
    - slot{"USERNAME": "raj.kulathu"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "raj.kulathu"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "90120"}
    - slot{"BADGEID": "90120"}
    - action_verify_badge_id
    - slot{"BADGEID": "90120"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "1234"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "@"}
    - utter_say_temporary_password
* thank
    - utter_bye

## Generated Story dob
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "andrews, jackson"}
    - slot{"FULLNAME": "andrews, jackson"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "andrews, jackson"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname{"USERNAME": "raj.kulathu"}
    - slot{"USERNAME": "raj.kulathu"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "raj.kulathu"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "90120"}
    - slot{"BADGEID": "90120"}
    - action_verify_badge_id
    - slot{"BADGEID": "90120"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "@"}
    - utter_say_temporary_password
* thank
    - utter_bye

## Generated Story 1619108541597455368 ssn locked
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "andrews, jackson"}
    - slot{"FULLNAME": "andrews, jackson"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "andrews, jackson"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname{"USERNAME": "raj.kulathu"}
    - slot{"USERNAME": "raj.kulathu"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "raj.kulathu"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "90120"}
    - slot{"BADGEID": "90120"}
    - action_verify_badge_id
    - slot{"BADGEID": "90120"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "1234"}
    - slot{"DOB_VERIFIED": true}
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

## Generated Story dob locked
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "andrews, jackson"}
    - slot{"FULLNAME": "andrews, jackson"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "andrews, jackson"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname{"USERNAME": "raj.kulathu"}
    - slot{"USERNAME": "raj.kulathu"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "raj.kulathu"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "90120"}
    - slot{"BADGEID": "90120"}
    - action_verify_badge_id
    - slot{"BADGEID": "90120"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": true}
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


## Generated Story 1619108541597455368 ssn expired
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "andrews, jackson"}
    - slot{"FULLNAME": "andrews, jackson"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "andrews, jackson"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname{"USERNAME": "raj.kulathu"}
    - slot{"USERNAME": "raj.kulathu"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "raj.kulathu"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "90120"}
    - slot{"BADGEID": "90120"}
    - action_verify_badge_id
    - slot{"BADGEID": "90120"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "1234"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "_"}
    - utter_say_ticket_generated_for_expired_account

## Generated Story dob expired
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "andrews, jackson"}
    - slot{"FULLNAME": "andrews, jackson"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "andrews, jackson"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname{"USERNAME": "raj.kulathu"}
    - slot{"USERNAME": "raj.kulathu"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "raj.kulathu"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "90120"}
    - slot{"BADGEID": "90120"}
    - action_verify_badge_id
    - slot{"BADGEID": "90120"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "_"}
    - utter_say_ticket_generated_for_expired_account

