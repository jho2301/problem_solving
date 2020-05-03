function quickSort(arr: Array<Number>): Array<Number> {
  if (arr.length <= 1) return arr;

  const pivot: Number = arr[0];
  const left: Array<Number> = [];
  const right: Array<Number> = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([5, 1, 2, 4, 3, 9]));
