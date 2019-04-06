## intent:bye
- bye
- good bye
- bye bye
- bye have a nice day
- good bye have a nice say
- bye

## intent:confirm_alternative_verification
- /confirm_alternative_verification[{"ALTERNATIVE_VERIFICATION_CONFIRMATION":"positive"}](ALTERNATIVE_VERIFICATION_CONFIRMATION:positive)
- /confirm_alternative_verification[{"ALTERNATIVE_VERIFICATION_CONFIRMATION":"positive"}](ALTERNATIVE_VERIFICATION_CONFIRMATION:positive)
- /confirm_alternative_verification[{"ALTERNATIVE_VERIFICATION_CONFIRMATION":"positive"}](ALTERNATIVE_VERIFICATION_CONFIRMATION:positive)
- /confirm_alternative_verification[{"ALTERNATIVE_VERIFICATION_CONFIRMATION":"negative"}](ALTERNATIVE_VERIFICATION_CONFIRMATION:negative)
- /confirm_alternative_verification[{"ALTERNATIVE_VERIFICATION_CONFIRMATION":"positive"}](ALTERNATIVE_VERIFICATION_CONFIRMATION:positive)

## intent:confirm_anything_else
- /confirm_anything_else[{"HELP_ANYTHING":"positive"}](HELP_ANYTHING:positive)
- /confirm_anything_else[{"HELP_ANYTHING":"negative"}](HELP_ANYTHING:negative)

## intent:confirm_password_reset
- /confirm_password_reset[{"PASSWORD_RESET_CONFIRMATION":"positive"}](PASSWORD_RESET_CONFIRMATION:positive)
- /confirm_password_reset[{"PASSWORD_RESET_CONFIRMATION":"negative"}](PASSWORD_RESET_CONFIRMATION:negative)
- /confirm_password_reset[{"PASSSWORD_RESET_CONFIRMATION":"positive"}](PASSSWORD_RESET_CONFIRMATION:positive)
- /confirm_password_reset[{"PASSSWORD_RESET_CONFIRMATION":"positive"}](PASSSWORD_RESET_CONFIRMATION:positive)
- /confirm_password_reset[{"PASSSWORD_RESET_CONFIRMATION":"positive"}](PASSSWORD_RESET_CONFIRMATION:positive)

## intent:get_password_type
- my [AD](ACCOUNT_TYPE) password
- [AD](ACCOUNT_TYPE) account password
- [Active directory](ACCOUNT_TYPE) password
- [peoplesoft](ACCOUNT_TYPE)

## intent:greetings
- hey
- hello
- hi
- heya
- good morning
- hello
- hello


## intent:mood_confirm
- Yes
- Sure
- ok
- Yes i will
- Oh yes
- No
- Never
- Not sure
- Not ok
- No i not
- oh no

## intent:my_name_is
- I am [Martin](PERSON)
- I am [Jack](PERSON)
- I'm [Steven](PERSON)
- im [Jack](PERSON)
- My name is [Martin Novak](PERSON)
- People call me [Josh](PERSON)

## intent:password_reset
- password [reset](DO_ACTION)
- can you [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password
- i want to [reset](DO_ACTION) [AD](ACCOUNT_TYPE) password
- need to [reset](DO_ACTION) my [computer](ACCOUNT_TYPE) password
- hi ,  from this morning i was not able to log in to my computer
- can you [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password
- can you [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password
- please [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password
- i was not able to login to [my](SOURCE_ACCOUNT) account
- my login says invalid password
- my computer says my account is locked
- I’d like to [reset](DO_ACTION) my password
- password [reset](DO_ACTION)
- can you please [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password
- can you [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password
- please [reset](DO_ACTION) [my](SOURCE_ACCOUNT) password

## intent:set_badgeid
- [1234](BADGEID)
- [1234](BADGEID) is my badgeid
- my badgeid is [1234](BADGEID)
- [xxxx](BADGEID)
- 1234
- 90880
- 08732
- 1234

## intent:set_dob
- my birth date is [11 March 1980](DOB)
- i was born on [21 Apr](DOB)
- [Mar 22 1992](DOB)
- [02/11/1992](DOB)
- [August 12](DOB)
- [15 March](DOB)
- MARCH 15
- [August 12](DOB:august 12)

## intent:set_fullname
- [John Smith](FULLNAME) is my fullname
- my fullname is [John Smith](FULLNAME)
- [poovarasan vasudevan](FULLNAME)
- ramasamy kulathu
- poovarasan vasudevan

## intent:set_ssn
- my ssn number is [3422](SSN)
- [4433](SSN)
- my last four digit ssn number is [5578](SSN)
- [8766](SSN)
- 4376
- 45635

## intent:set_usename
- my username is [john.smith](USERNAME)
- [john.smith](USERNAME)
- my computer username is [john.smith](USERNAME)
- [john.smith](USERNAME) is my username
- [poovarasan.v](USERNAME)
- my system username is [poovarasan.v](USERNAME)
- [mpo.g](USERNAME)
- [poosan](FULLNAME)
- [poovarasan.v](USERNAME)
- poovarasan.v
- [poovarasan.v](USERNAME)
- iampoosan.v
- poovarasan.vasu

## intent:set_user_problem
- it says invalid password
- it says user account locked
- it gives some strange message
- i was not able to login, it says invalid password

## intent:set_username_or_fullname
- my name is [John smith](NAME) and my username is [j.smith](USERNAME)

## synonym:negative
- {"ALTERNATIVE_VERIFICATION_CONFIRMATION":"negative"}
- {"PASSWORD_RESET_CONFIRMATION":"negative"}

## synonym:positive
- {"ALTERNATIVE_VERIFICATION_CONFIRMATION":"positive"}
- {"HELP_ANYTHING":"positive"}
- {"PASSWORD_RESET_CONFIRMATION":"positive"}
- {"PASSSWORD_RESET_CONFIRMATION":"positive"}
