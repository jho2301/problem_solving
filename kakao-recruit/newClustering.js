function solution(str1, str2) {
  let processed = [str1, str2].map((str) =>
    str
      .split('')
      .map((c, idx) => (str[idx + 1] ? (c + str[idx + 1]).toLowerCase() : ''))
      .filter((word) => !/[^a-z]/.test(word))
      .slice(0, -1)
  );
  let numeratorCnt = 0;
  for (let i = 0; i < processed[0].length; i++) {
    for (let j = 0; j < processed[1].length; j++) {
      if (processed[0][i] === processed[1][j]) {
        numeratorCnt++;
        processed[1].splice(j, 1);
        break;
      }
    }
  }
  const denominatorCnt = processed[0].length + processed[1].length;
  if (denominatorCnt === 0 && numeratorCnt === 0) return 65536;

  return parseInt((numeratorCnt / denominatorCnt) * 65536);
}
