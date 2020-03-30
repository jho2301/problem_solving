from collections import Collection


def solution(participant, completion):
    return list(Counter(participant) - Counter(completion))[0]


print(solution(["a", "b", "c"], ["a", "b"]))
