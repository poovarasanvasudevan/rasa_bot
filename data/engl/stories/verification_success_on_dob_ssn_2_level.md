## Generated Story dob/ssn expired
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "1234"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"CONTACT_NUMBER": "322-432-8778"}
    - slot{"CONTACT_NUMBER": "322-432-8778"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT1234567"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye

## Generated Story ssn/dob expired
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"CONTACT_NUMBER": "322-432-8778"}
    - slot{"CONTACT_NUMBER": "322-432-8778"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT1234567"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye



## Generated Story dob/ssn locked
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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

## Generated Story ssn/dob locked
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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



## Generated Story dob/ssn no_problem
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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

## Generated Story ssn/dob no_problem
* password_reset{"DO_ACTION": "reset"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "_"}
    - slot{"FULLNAME": "_"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "_"}
    - slot{"BADGEID": "_"}
    - action_verify_badge_id
    - slot{"BADGEID": "_"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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


## username


## Generated Story dob/ssn expired
* password_reset{"DO_ACTION": "reset"}
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
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "1234"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"CONTACT_NUMBER": "322-432-8778"}
    - slot{"CONTACT_NUMBER": "322-432-8778"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT1234567"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye

## Generated Story ssn/dob expired
* password_reset{"DO_ACTION": "reset"}
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
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
* set_ad_contact_number{"CONTACT_NUMBER": "322-432-8778"}
    - slot{"CONTACT_NUMBER": "322-432-8778"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT1234567"}
    - utter_say_ticket_generated_for_expired_account
* thank
    - utter_bye



## Generated Story dob/ssn locked
* password_reset{"DO_ACTION": "reset"}
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
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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

## Generated Story ssn/dob locked
* password_reset{"DO_ACTION": "reset"}
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
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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



## Generated Story dob/ssn no_problem
* password_reset{"DO_ACTION": "reset"}
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
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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

## Generated Story ssn/dob no_problem
* password_reset{"DO_ACTION": "reset"}
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
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
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
