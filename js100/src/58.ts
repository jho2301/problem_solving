function setComma(nbr: number): string {
  let nbrstr: string = nbr.toString();
  let result: string = '';
  let nbrstrLen = nbrstr.length;

  if (nbrstrLen % 3) {
    result += nbrstr.slice(0, nbrstrLen % 3);
    nbrstr = nbrstr.slice(nbrstrLen % 3);
    nbrstrLen -= nbrstrLen % 3;
    if (nbrstrLen) result += ',';
  }
  while (nbrstrLen) {
    result += nbrstr.slice(0, 3);
    nbrstr = nbrstr.slice(3);
    nbrstrLen -= 3;
    if (nbrstrLen) result += ',';
  }
  return result;
}

const str = setComma(123455);
console.log(str);
