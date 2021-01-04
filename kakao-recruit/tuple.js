function solution(s) {
  const splittedS = s
    .slice(2, -2)
    .split('},{')
    .map((el) => el.split(',').map((el) => parseInt(el)));
  splittedS.sort((a, b) => a.length - b.length);

  const answer = [];

  splittedS.forEach((el) => {
    for (let c of el) if (!answer.includes(c)) answer.push(c);
  });

  return answer;
}

console.log(solution('{{2,1},{2,1,3},{2,1,3,4},{2}}'));
