from itertools import permutations


def strikes(answer, standard):
    strike_point = 0
    for i in range(0, 3):
        if answer[i] == str(standard[i]):
            strike_point += 1
    return strike_point


def balls(answer, standard):
    ball_point = 0
    for i in range(0, 3):
        for j in range(0, 3):
            if answer[i] == str(standard[j]) and i != j:
                ball_point += 1
                break
    return ball_point


def is_possible(baseballs, permutaion):
    for baseball in baseballs:
        if baseball[1] == strikes(str(baseball[0]), permutaion) and \
                baseball[2] == balls(str(baseball[0]), permutaion):
            continue
        else:
            return 0
    return 1


def solution(baseballs):
    answer = 0
    for permutaion in permutations([1, 2, 3, 4, 5, 6, 7, 8, 9], 3):
        answer += is_possible(baseballs, permutaion)
    return answer
