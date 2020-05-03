function isRightOrder(strarr: string[], rule: string): string[] {
  let result: string[] = [];
  let recentIndex: number;
  let isAssigned: boolean = false;

  for (let str of strarr) {
    isAssigned = false;
    recentIndex = 0;
    for (let chr of rule) {
      if (str.indexOf(chr) < recentIndex && str.indexOf(chr) !== -1) {
        result.push('불가능');
        isAssigned = true;
        break;
      }
      recentIndex = str.indexOf(chr);
    }
    if (!isAssigned) result.push('가능');
  }
  return result;
}

console.log(
  isRightOrder(['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'], 'ABCD'),
);
