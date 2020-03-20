from itertools import permutations

def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, number):
        if number % i == 0:
            return False
    return True

def atoi(tup):
    result = ""
    for i in tup:
        result += i
    return result

def solution(numbers):
    new_numbers = []
    answer = 0
    for i in range(1, len(numbers) + 1):
        new_numbers += map(atoi, permutations(numbers, i))
    new_numbers = set(map(int, new_numbers))
    for number in new_numbers:
        if is_prime(int(number)):
            answer += 1
    return answer
