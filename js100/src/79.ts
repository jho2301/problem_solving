const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const rotateNum = 2;

function rotate(originList: number[], rotateNum: number): any {
  const copyList: number[] = [...originList];
  const resultList: number[] = [];
  for (let i = 0; i < rotateNum && copyList.length !== 0; i++) {
    let temp: any = copyList.pop();
    copyList.unshift(temp);
  }
  for (let j = 0; j < originList.length; j++)
    resultList.push(Math.abs(originList[j] - copyList[j]));
  let min = Math.min(...resultList);
  let index = resultList.findIndex((x) => x === min);

  return { index, value: [originList[index], copyList[index]] };
}

console.log(rotate(l, rotateNum));
