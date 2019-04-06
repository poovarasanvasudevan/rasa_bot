## password story
* password_reset
    - utter_ask_what_kind_of_account

## ad password reset
* ad_account_password_reset
    - utter_ask_full_name_or_username

## ask full name
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "aad.v"}
    - slot{"USER_VERIFICATION_RESULT": "found"}
    - utter_user_found_ask_badge_id

## setting badge success
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found"}
    - action_verify_badge_id
    - slot{"BADGEID": "343546"}
    - slot{"BADGEID_VALID": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## verify badge failes
* set_ad_badgeid{"USER_VERIFICATION_RESULT": "found"}
    - action_verify_badge_id
    - slot{"BADGEID": "343546"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
    
## verify ssn passed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "9077"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password

## verify ssn failed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "9077"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_ask_dob

## verify ssn second success
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/09"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password

## verify ssn second failes
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/09"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_not_able_to_verify
    

## verify dob passed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/05"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "no_problem"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password

## verify dob failed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/06"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_ask_ssn

## verify ssn second success
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "3567"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password

## verify ssn second failed
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "3567"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_not_able_to_verify

## locked dob ssn scenario verify ssn passed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "9077"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password


## locked dob ssn scenario  verify ssn second
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/09"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## locked dob ssn scenario  verify ssn second failed
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/09"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_not_able_to_verify
    
## locked dob ssn scenario verify dob passed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/05"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password

## locked dob ssn scenario verify ssn second
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "3567"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "locked"}
    - action_do_password_reset
    - slot{"TEMP_PASSWORD": "Temp@890$"}
    - utter_say_temporary_password
    
## locked dob ssn scenario verify ssn second failed
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "3567"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION":true}
    - utter_say_not_able_to_verify
    

## expired scenario dob ssn scenario verify ssn passed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "9077"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired


## expired scenario dob ssn scenario  verify ssn second failed
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/09"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired

## expired scenario dob ssn scenario  verify ssn second failed
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/09"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION":true}
    - utter_say_not_able_to_verify
        

## expired scenario dob ssn scenario verify dob passed
* set_ad_dob_ssn{"BADGEID_VALID": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/05"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired

## expired scenario dob ssn scenario verify ssn second
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "3567"}
    - slot{"DOB_VERIFIED": true}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - utter_say_verification_success
    - utter_say_problem_check
    - action_check_account_problem
    - slot{"ACCOUNT_PROBLEM": "expired"}
    - utter_say_account_expired

## expired scenario dob ssn scenario verify ssn second failed
* set_ad_dob_ssn_2{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - action_verify_dob_ssn
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "3567"}
    - slot{"DOB_VERIFIED": false}
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION":true}
    - utter_say_not_able_to_verify
    
## expired account contact number scenario
* set_ad_contact_number{"ACCOUNT_PROBLEM": "expired"}
    - action_create_pt_expired_account
    - slot{"EXPIRED_ACCOUNT_PT_NUMBER": "PT1234567"}
    - utter_say_ticket_generated_for_expired_account

## failed scenario on verification
* set_ad_contact_number{"DOB_VERIFIED": false,"IS_SECOND_DOB_SSN_VERIFICATION":true}
    - action_create_pt_for_verification_failed
    - slot{"VERIFICATION_FAILED_TICKET_NUMBER": "PT1234564357"}
    - utter_say_ticket_generated_for_verification_failed
    

