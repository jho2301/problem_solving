from functools import reduce


def solution(clothes):
    answer_list = dict()
    for clothe in clothes:
        if not answer_list.get(clothe[1]):
            answer_list[clothe[1]] = 2
        else:
            answer_list[clothe[1]] += 1
    answer = reduce(lambda a, b: a * b, answer_list.values(), 1)
    return answer - 1


print(solution([['yellow_hat', 'headgear'],
                ['blue_sunglasses', 'eyewear'],
                ['green_turban', 'headgear']]))
