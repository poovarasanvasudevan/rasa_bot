# from duckling import DucklingWrapper
#
# dob_message = "John birthday lies in Aug 11"
# d = DucklingWrapper()
# print(d.parse(dob_message))
#
# import string
# import random
#
# lettersAndDigits = string.ascii_letters + string.digits
# print(''.join(random.choice(lettersAndDigits) for i in range(8)))
# from duckling import DucklingWrapper
# from dateutil import parser
#
# valid_dob = ['11/11', '09/22']
# d = DucklingWrapper()
# parsed_time = d.parse_time(" my dob is 11/11")
#
# if len(parsed_time) is not 0:
#     time = list(filter(lambda x: x.get('dim') == 'time', parsed_time))
#     if time is not None and len(time) == 1:
#         date = parser.parse(time[0].get('value').get('value'))
#         if str(date.day).join('/').join(str(date.month)) in valid_dob:
#             dob_ssn_verified = False
#         else:
#             dob_ssn_verified = False
# else:
#     dob_ssn_verified = False

fullname_regex='[A-Za-z]{2,}, [A-Za-z]{2,}'


from re import finditer
for match in finditer(fullname_regex, "my fullname is arulmurugaiyan, sundharraju"):
    print(match.span(), match.group())
