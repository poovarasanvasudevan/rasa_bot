from duckling import DucklingWrapper


class Duckling:
    __instance = None
    __duck = None

    @staticmethod
    def getInstance():
        if Duckling.__instance is None:
            Duckling()
        return Duckling.__instance

    def __init__(self):
        self.__duck = DucklingWrapper()

    @classmethod
    def parse_time(self, txt):
        return self.__duck.parse_time(txt)

    @classmethod
    def parse_phone_number(self, txt):
        return self.__duck.parse_phone_number(txt)
