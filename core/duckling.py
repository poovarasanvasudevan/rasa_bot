from duckling import DucklingWrapper


class Duckling:
    __instance = None

    @staticmethod
    def getInstance():
        if Duckling.__instance is None:
            Duckling.__instance = DucklingWrapper()

        return Duckling.__instance

