const route: string[][] = [];

function how_many_times_hanoi(
  num: number,
  start: string,
  end: string,
  temp: string,
): void {
  if (num === 1) {
    route.push([start, end]);
    return;
  }

  how_many_times_hanoi(num - 1, start, temp, end);
  route.push([start, end]);
  how_many_times_hanoi(num - 1, temp, end, start);
}

how_many_times_hanoi(3, 'start', 'end', 'temp');
console.log(route);
console.log(route.length);
