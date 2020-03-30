def solution(genres, plays):
    answer = []
    song_list = []
    genre_counter = dict()
    genre_total = dict()
    second_idx = -1

    for i in range(len(genres)):
        if not genre_total.get(genres[i]):
            genre_total[genres[i]] = plays[i]
        else:
            genre_total[genres[i]] += plays[i]
    genre_total = list(genre_total.items())
    genre_total = sorted(genre_total, key=lambda a: a[1])
    for genre in genres:
        genre_counter[genre] = 2
    for i in range(len(genres)):
        song_list.append((i, plays[i], genres[i]))
    song_list = sorted(song_list, key=lambda a: a[1], reverse=True)
    while genre_total:
        genre_to_write = genre_total.pop()[0]
        for idx, song in enumerate(song_list):
            if genre_counter[song[2]] != 0 and genre_to_write == song[2]:
                answer.append(song[0])
                genre_counter[song[2]] -= 1
                for i in range(idx + 1, len(song_list)):
                    if song_list[i][2] == song[2]:
                        second_idx = i
                        break
                if second_idx != -1 and genre_counter[song[2]] != 0:
                    answer.append(song_list[second_idx][0])
                    genre_counter[song_list[second_idx][2]] = 0
                    second_idx = -1
    return answer


print(solution(['classic', 'pop', 'classic', 'classic', 'classic', 'pop', 'classic'],
               [500, 600, 150, 800, 800, 2500, 800, ]))
