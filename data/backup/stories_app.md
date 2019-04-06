## password reset
* password_reset
    - utter_ask_what_kind_of_account
    
## ad password reset
* ad_account_password_reset
    - utter_ask_full_name_or_username
    
## userenters fullname
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "_"}
    - slot{"USER_VERIFICATION_RESULT": "found"}
    - utter_user_found_ask_badge_id

## user enters username
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "aad.v"}
    - slot{"USER_VERIFICATION_RESULT": "found"}
    - utter_user_found_ask_badge_id
    
## user gives badgeid (badgeid success no_problem)
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found"}
    - action_verify_badge_id
    - slot{"BADGEID": "343546"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "_"}
    - utter_say_temporary_password
    
## user gives badgeid (badgeid success locked)
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found"}
    - action_verify_badge_id
    - slot{"BADGEID": "343546"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "_"}
    - utter_say_temporary_password

## user gives badgeid (badgeid success expired)
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found"}
    - action_verify_badge_id
    - slot{"BADGEID": "343546"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired
    
## expired accoutn user not giving contact details
* expired_account_user_not_provided_contact_info{"ACCOUNT_PROBLEM": "expired"}
    - utter_action_quit_with_client_voice
    
## expired accoutn user giving contact number create ticket
* set_ad_contact_number{"ACCOUNT_PROBLEM": "expired"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "_"}
    - utter_say_ticket_generated_for_expired_account

## user gives badgeid (badgeid failed noproblem)
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found"}
    - action_verify_badge_id
    - slot{"BADGEID": "343546"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_ssn
    
## user gives ssn
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "9000"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_ask_dob

## user gives dob
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/08"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_ask_ssn

## user gives dob second (valid locked)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/08"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## user gives ssn second (valid locked)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "4567"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## user gives dob second (valid no_problme)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/08"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## user gives ssn second (valid no_problme)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "4567"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - utter_say_account_is_locked
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## user gives dob second (valid expired)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/08"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - utter_say_account_expired
    
## user gives ssn second (valid expired)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "4567"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - utter_say_account_expired
    
## user gives ssn second (invalid)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "4567"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_not_able_to_verify

## user gives dob second (invalid)
* set_ad_dob_ssn_2{"BADGEID_VALID": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/06"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_not_able_to_verify
 
## user gives contact detail on verification failed
* set_ad_contact_number{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - action_create_pt_for_verification_failed
    - utter_say_ticket_generated_for_verification_failed

