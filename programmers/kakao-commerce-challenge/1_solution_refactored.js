// key값이 순차적으로 증가하는 수이기에 Array로 바꿔보기
function solution(n, record) {
  const MAX_LENGTH = 5; // 상수를 통해 가독성을 높임
  const answer = [];
  const categorizedNames = new Array(n).fill(0).map(() => []);

  record
    .map((str) => str.split(" "))
    .map((el) => ({ idx: parseInt(el[0]) - 1, name: el[1] })) // split의 결과 값에 프로퍼티 식별자를 붙여 가독성을 높임
    .forEach(({ idx, name }) => {
      if (!categorizedNames[idx].includes(name)) {
        if (categorizedNames[idx].length === MAX_LENGTH) {
          categorizedNames[idx].shift();
        }
        categorizedNames[idx].push(name);
      }
    });
  categorizedNames.forEach((names) => answer.push(...names));

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
