## Generated Story -1630163761156837026
* password_reset{"DO_ACTION": "reset", "SOURCE_ACCOUNT": "my"}
    - utter_ask_what_kind_of_account
* ad_account_password_reset
    - utter_ask_full_name_or_username
* set_ad_username_or_fullname{"FULLNAME": "smith, john"}
    - slot{"FULLNAME": "smith, john"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "smith, john"}
    - slot{"USER_VERIFICATION_RESULT": "NAME_NOT_FOUND"}
    - utter_say_fullname_not_found
    - utter_ask_username
* set_ad_username_or_fullname
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "username"}
    - slot{"USERNAME": "john.smith"}
    - slot{"USER_VERIFICATION_RESULT": "USERNAME_NOT_FOUND"}
    - utter_say_username_not_found
    - utter_ask_fullname
* set_ad_username_or_fullname{"FULLNAME": "vasudevan, poovarasan"}
    - slot{"FULLNAME": "vasudevan, poovarasan"}
    - action_verify_fullname_or_username
    - slot{"USER_TYPED_FULLNAME_OR_USERNAME": "fullname"}
    - slot{"FULLNAME": "vasudevan, poovarasan"}
    - slot{"USER_VERIFICATION_RESULT": "FOUND"}
    - utter_user_found_ask_badge_id
* set_ad_badgeid{"BADGEID": "34567"}
    - slot{"BADGEID": "34567"}
    - action_verify_badge_id
    - slot{"BADGEID": "34567"}
    - slot{"BADGEID_VALID": false}
    - utter_ask_dob_or_ssn
* set_ad_dob_ssn
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": false}
    - slot{"DOB_SSN_ENTERED": "SSN"}
    - slot{"DOB_SSN": "6677"}
    - slot{"DOB_VERIFIED": false}
    - utter_ask_dob
* set_ad_dob_ssn{"DOB_SSN": "11/03"}
    - slot{"DOB_SSN": "11/03"}
    - action_verify_dob_ssn
    - slot{"IS_SECOND_DOB_SSN_VERIFICATION": true}
    - slot{"DOB_SSN_ENTERED": "DOB"}
    - slot{"DOB_SSN": "11/03"}
    - slot{"DOB_VERIFIED": false}
    - utter_say_not_able_to_verify
* set_ad_contact_number{"CONTACT_NUMBER": "555-897-0977"}
    - slot{"CONTACT_NUMBER": "555-897-0977"}
    - action_create_pt_for_verification_failed
    - slot{"VERIFICATION_FAILED_TICKET_NUMBER": "PT1234564357"}
    - utter_say_ticket_generated_for_verification_failed
* bye
    - utter_bye

