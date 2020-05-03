const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0],
  [0, 3],
];

function multiplyMatrix(mat1: number[][], mat2: number[][]): any {
  let result: number[][] = [];
  if (mat1.length !== mat2[0].length || mat2.length !== mat1[0].length)
    return -1;
  for (let i = 0; i < mat1[0].length; i++) {
    let temp: number[] = [];
    for (let j = 0; j < mat1.length; j++) {
      let element: number = 0;
      for (let k = 0; k < mat1[0].length; k++)
        element += mat1[i][k] * mat2[k][j];
      temp.push(element);
    }
    result.push(temp);
  }
  return result;
}

console.log(multiplyMatrix(a, b));
