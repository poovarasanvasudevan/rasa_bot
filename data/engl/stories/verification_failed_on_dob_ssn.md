## Generated Story ssn dob
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
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
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_say_not_able_to_verify
* set_ad_contact_number{"CONTACT_NUMBER": "212-343-1234"}
    - slot{"CONTACT_NUMBER": "212-343-1234"}
    - action_create_pt_for_verification_failed
    - slot{"VERIFICATION_FAILED_TICKET_NUMBER": "PT1234564357"}
    - utter_say_ticket_generated_for_verification_failed

## Generated Story dob ssn
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
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
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_ssn
* set_ad_dob_ssn{"DOB_SSN": "_"}
    - slot{"DOB_SSN": "_"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "_"}
    - slot{"DOB_VERIFIED": false}
    - utter_say_not_able_to_verify
* set_ad_contact_number{"CONTACT_NUMBER": "212-343-1234"}
    - slot{"CONTACT_NUMBER": "212-343-1234"}
    - action_create_pt_for_verification_failed
    - slot{"VERIFICATION_FAILED_TICKET_NUMBER": "PT1234564357"}
    - utter_say_ticket_generated_for_verification_failed

