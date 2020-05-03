function moveEfficiently(weight: number): number {
  let leftover: number = weight % 7;
  weight -= weight % 7;

  while (leftover % 3 != 0) {
    weight -= 7;
    leftover += 7;
    if (weight < 0) return -1;
  }
  return weight / 7 + leftover / 3;
}

console.log(moveEfficiently(13));
