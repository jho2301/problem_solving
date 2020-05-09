function weiredThreeSixNine(dest: number): number {
  let isThreeSixNine: boolean = true;
  let cnt = 0;

  for (let i: number = 1; i <= dest; i++) {
    const elements = i.toString().split("");
    for (let n of elements)
      if (n !== "3" && n !== "6" && n !== "9") isThreeSixNine = false;
    if (isThreeSixNine) cnt++;
    isThreeSixNine = true;
  }
  return cnt;
}

console.log(weiredThreeSixNine(93));
