function getShortTerm(str: string): string {
  let result: string = str[0];

  for (let i = 1; i + 1 < str.length; i++)
    if (str[i] === ' ' && str[i + 1] !== ' ') result += str[i + 1];
  return result;
}

const stri63: string = getShortTerm('you only live once! ');

console.log(stri63);
