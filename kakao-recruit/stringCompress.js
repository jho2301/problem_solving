function solution(s) {
  let answer = s.length;
  for (let i = 1; i < s.length - 1; i++) {
    let result = getStringCompressionLength(s, i);
    if (answer > result) answer = result;
  }

  return answer;
}

function getStringCompressionLength(s, chunkSize) {
  const splittedS = [];
  let result = '';

  for (let i = 0; i < s.length; i += chunkSize)
    splittedS.push(s.slice(i, i + chunkSize));
  let cnt = 1;
  for (let i = 0; i < splittedS.length - 1; i++) {
    if (splittedS[i] === splittedS[i + 1]) {
      cnt++;
    } else {
      result += `${cnt === 1 ? '' : cnt}${splittedS[i]}`;
      cnt = 1;
    }
  }
  result += `${cnt === 1 ? '' : cnt}${splittedS[splittedS.length - 1]}`;
  return result.length;
}

console.log(solution('aabbaccc'));
