function solution(m, v) {
  var height = 0; // height를 phases의 length프로퍼티로 활용하기, var는 let, const와 혼용하지 않는다. es6+에선 사용하지 않는다.
  let phases = [m]; // 주소값을 바꾸지 않으므로 const로 선언해주는 게 좋았다.

  v.forEach((blockLength) => {
    if (phases[height] - blockLength < 0) {
      phases.push(m);
      height++;
      phases[height] -= blockLength;
    } else {
      for (let i = height - 1; i >= -1; i--) {
        if (i === -1 || phases[i] - blockLength < 0) {
          phases[i + 1] -= blockLength;
          break;
        }
      }
    }
  });

  return height + 1;
}

console.log(solution(4, [2, 3, 1]));
console.log(solution(4, [3, 2, 3, 1]));
