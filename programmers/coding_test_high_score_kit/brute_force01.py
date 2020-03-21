def solution(answers):
    pattern1 = [1, 2, 3, 4, 5]
    pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    points = [0, 0, 0]
    result = []

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx % len(pattern1)]:
            points[0] += 1
        if answer == pattern2[idx % len(pattern2)]:
            points[1] += 1
        if answer == pattern3[idx % len(pattern3)]:
            points[2] += 1
    for idx, point in enumerate(points):
        if max(points) == points[idx]:
            result.append(idx + 1)
        return result


print(solution([2, 1, 2, 3, 2, 4, 2, 5]))

