from heapq import *


def solution(scoville, K):
    cnt = 0
    pq = []
    for i in scoville:
        heappush(pq, i)
    while True:
        lowest = heappop(pq)
        if K <= lowest:
            break
        if len(pq):
            return -1
        secondary = heappop(pq)
        if secondary == 0:
            return -1
        lowest += 2 * secondary
        heappush(pq, lowest)
        cnt += 1
    return cnt


print(solution([1, 2, 9, 8, 5], 5))
