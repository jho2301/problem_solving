const nbrstr: string = '5 4 3 2 1';
const nbrarr: number[] = nbrstr.split(' ').map((n) => parseInt(n, 10));

function isContinuousNumber(nbrarr: number[]): Boolean {
  nbrarr.sort((a, b) => a - b);
  for (let i = 0; i + 1 < nbrarr.length; i++)
    if (nbrarr[i] + 1 !== nbrarr[i + 1]) return false;
  return true;
}

if (isContinuousNumber(nbrarr)) console.log('YES');
else console.log('NO');
