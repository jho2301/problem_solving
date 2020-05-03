let cnt = 0;

for (let i = 1; i <= 1000; i++) {
  for (let j of i.toString()) if (j === '1') cnt++;
}

console.log(cnt);
