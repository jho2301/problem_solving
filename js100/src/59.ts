function printStrAlignCenter(str: string): string {
  if (50 < str.length) return str;

  const left: number = Math.floor((50 - str.length) / 2);
  const right: number = 50 - str.length - left;

  return '='.repeat(left).concat(str, '='.repeat(right));
}

console.log(printStrAlignCenter('hd'));
