from heapq import *

def solution(stock, dates, supplies, k):
    answer = 0
    supply_info = []
    supply_info_2 = []
    for i in range(len(dates)):
        heappush(supply_info, (-supplies[i], dates[i]))
    while stock < k:
        temp = heappop(supply_info)
        if temp[1] <= stock:
            stock += -temp[0]
            answer += 1
            break
        else:
            supply_info_2.append(temp)
    while len(supply_info):
        supply_info_2.append(heappop(supply_info))
    supin2_len = len(supply_info_2)
    print(supin2_len)
    while stock < k:
        for i in range(supin2_len):
            if supply_info_2[i][1] <= stock and supply_info_2[i][1] != -1:
                stock += -supply_info_2[i][0]
                answer += 1
                supply_info_2[i] = (-1, -1)
                break
    return answer


print(solution(4, [4, 10, 15], [20, 5, 10], 30))  # 2
