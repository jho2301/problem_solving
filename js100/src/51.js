/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line consistent-return */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// console.log('배열을 입력하세요');

// rl.on('line', (line) => {
//   console.log(mergeSort(line.split(' ').map(n => parseInt(n, 10))));
//   rl.close();
// }).on('close', () => {
//   process.exit();
// });

console.log(mergeSort([1, 3, 0, 3, 4, 5, 8, 1, 2, 3]));
