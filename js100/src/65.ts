function mergeArray(arr1: any[], arr2: any[]): any[][] {
  let result: any[][] = [];
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    if (!(i % 2)) result.push([arr1[i], arr2[i]]);
    else result.push([arr2[i], arr1[i]]);
  }
  return result;
}

console.log(mergeArray([1, 2, 3, 4], ['a', 'b', 'c', 'd']));
