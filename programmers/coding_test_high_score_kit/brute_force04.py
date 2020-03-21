def solution(brown, red):
    width = 3
    height = 3
    while True:
        while width >= height:
            if brown == 2 * (width + height) - 4 and \
                    red == (height - 2) * (width - 2):
                return [width, height]
            height += 1
        height = 3
        width += 1

