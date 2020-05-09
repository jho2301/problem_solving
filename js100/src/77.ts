function getCommonString(big: string, little: string): number {
  let possibleLen = little.length;

  while (possibleLen !== 0) {
    for (let i = 0; i < little.length - possibleLen + 1; i++) {
      let tempStr = little.substr(i, possibleLen);
      if (big.includes(tempStr)) return possibleLen;
    }
    possibleLen--;
  }
  return -1;
}

console.log(getCommonString("THISISSTRINGS", "TATHISISKKQQAEW"));
