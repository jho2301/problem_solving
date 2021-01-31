function solution(n, record) {
  let answer = [];
  let map = new Map(); // const로 선언해주는게 좋았다.

  for (let i = 1; i <= n; i++) {
    map[i] = [];
  }

  record = record // console.log()로 확인하려고 한 흔적..
    .map((str) => str.split(" "))
    .forEach((el) => {
      if (!map[el[0]].includes(el[1])) {
        if (map[el[0]].length === 5) {
          map[el[0]].shift();
        }
        map[el[0]].push(el[1]);
      }
    });

  for (let i = 1; i <= n; i++) {
    answer.push(...map[i]);
  }

  return answer;
}

const log1 = [
  "1 fracta",
  "1 sina",
  "1 hana",
  "1 robel",
  "1 abc",
  "1 sina",
  "1 lynn",
];

const log2 = [
  "1 a",
  "1 b",
  "1 abc",
  "3 b",
  "3 a",
  "1 abcd",
  "1 abc",
  "1 aaa",
  "1 a",
  "1 z",
  "1 q",
  "3 k",
  "3 q",
  "3 z",
  "3 m",
  "3 b",
];

console.log(solution(1, log1));
console.log(solution(4, log2));
