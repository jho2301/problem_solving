function solution(next_student) {
  let counts = [...next_student]; // next_student.length를 이용해 새로 배열을 생성해주는게 더 명시적일 것 같다.
  // 명령문도 좋지만 함수로 해결할 수 있다.
  for (let i = 0; i < next_student.length; i++) {
    let count = 1;

    if (next_student[i] === 0) {
      counts[i] = { count: 1, history: [i + 1] };
      continue;
    }

    let temp = next_student[i];

    // 추상화가 가능한 부분. 함수를 분리하자
    // history만으로 count값도 나타낼 수 있음(history.length)
    if (counts[temp - 1].history) {
      if (!counts[temp - 1].history.includes(i + 1)) {
        counts[i] = {
          count: counts[temp - 1].count + 1,
          history: [...counts[temp - 1].history, i + 1],
        };
        continue; // 중복코드
      } else {
        let idx = counts[temp - 1].history.findIndex((el) => el === i + 1);
        counts[i] = {
          count: [i + 1, ...counts[temp - 1].history.slice(0, idx)].length,
          history: [i + 1, ...counts[temp - 1].history.slice(0, idx)],
        };
        continue;
      }
    }
    let hi = next_student.map((el) => false);
    count++;
    let history = [i + 1, temp];
    while (next_student[temp - 1].next !== 0) {
      if (hi[temp - 1]) break;
      hi[temp - 1] = true;
      temp = next_student[temp - 1];
      history.push(temp);
      count++;
    }
    counts[i] = { count, history };
  }
  let max = Math.max(...counts.map((el) => el.count));
  for (let i = counts.length - 1; i >= 0; i--) {
    if (counts[i].count === max) return i + 1;
  }
  return -1;
}

console.log(solution([6, 10, 8, 5, 8, 10, 5, 1, 6, 7]));
