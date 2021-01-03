const isValidPalindrome = (string) => {
  let charList = string
    .toLowerCase()
    .split('')
    .filter(
      (char) =>
        (char.charCodeAt(0) >= 'a'.charCodeAt(0) &&
          char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= '0'.charCodeAt(0) &&
          char.charCodeAt(0) <= '9'.charCodeAt(0))
    );
  for (let i = 0; i < charList.length / 2; i++)
    if (charList[i] !== charList[charList.length - i - 1]) return false;
  return true;
};

let param = 'A man, a plan, a canal: Panama';
console.log(isValidPalindrome(param));
param = 'race a car';
console.log(isValidPalindrome(param));
param = '131';
console.log(isValidPalindrome(param));
