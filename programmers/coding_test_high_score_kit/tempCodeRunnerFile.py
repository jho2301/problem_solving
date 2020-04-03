from queue import PriorityQueue

def solution(stock, dates, supplies, k):
    answer = 0
    supply_info = PriorityQueue()
    supply_info_2 = []
    for i in range(len(dates)):
        supply_info.put((-supplies[i], dates[i]))
    while stock < k:
        temp = supply_info.get()
        if temp[1] <= stock:
            stock += -temp[0]
            answer += 1
            break
        else:
            supply_info_2.append(temp)
    while not supply_info.empty():
        supply_info_2.insert(supply_info.get())
    while stock < k:
        for temp in supply_info_2:
            if temp[1] <= stock:
                stock += -temp[0]
                answer += 1
                supply_info_2.pop(temp)
                break
    return answer


print(solution(4, [4, 10, 15], [20, 5, 10], 30))  # 2
