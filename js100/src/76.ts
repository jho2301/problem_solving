let mapData = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

function getMaxBomb(
  posX: number,
  posY: number,
  detectArea: number,
  mapData: any
): number {
  let cnt = 0;

  for (let yCnt = 0; yCnt < detectArea; yCnt++) {
    let x: number = posX;
    for (let xCnt = 0; xCnt < detectArea; xCnt++) {
      if (mapData[posY][x] === 1) cnt++;
      if (--x < 0) break;
    }
    if (--posY < 0) break;
  }
  return cnt;
}

function maxBomb(mapSize: number, detectArea: number, mapData: any): number {
  let cnt = 0;
  let max = 0;

  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      cnt = getMaxBomb(x, y, detectArea, mapData);
      if (max < cnt) max = cnt;
    }
  }
  return max;
}

console.log(maxBomb(5, 3, mapData));
