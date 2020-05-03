function zip_string(str: string): string {
  let result: string = str[0];
  let temp: string = str[0];
  let cnt: number = 1;

  for (let i = 1; i < str.length; i++) {
    if (temp === str[i]) cnt++;
    else {
      result += cnt.toString();
      result += str[i];
      cnt = 1;
      temp = str[i];
    }
  }
  result += cnt.toString();

  return result;
}

const stri: string = zip_string('hhhasii');

console.log(stri);
