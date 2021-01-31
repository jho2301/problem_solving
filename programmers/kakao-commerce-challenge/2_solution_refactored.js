function solution(m, v) {
  const phases = [m];

  v.forEach((blockLength) => {
    // 좀 더 명시적인 값 비교
    if (phases[phases.length - 1] < blockLength) {
      phases.push(m);
      phases[phases.length - 1] -= blockLength;
    } else {
      for (let i = phases.length - 2; i >= -1; i--) {
        if (i === -1 || phases[i] < blockLength) {
          phases[i + 1] -= blockLength;
          break;
        }
      }
    }
  });

  return phases.length;
}

console.log(solution(4, [2, 3, 1]));
console.log(solution(4, [3, 2, 3, 1]));
