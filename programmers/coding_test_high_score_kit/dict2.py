def solution(phone_book):
    pb_len = len(phone_book)
    for i in range(pb_len):
        for j in range(pb_len):
            if i != j and phone_book[i] in phone_book[j][:len(phone_book[i])]:
                return False
    return True


print(solution(["123", "456", "789"]))
