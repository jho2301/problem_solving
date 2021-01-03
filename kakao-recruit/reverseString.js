const reverseString = (str) => {
  let res = string.split('');

  for (let i = 0; i < str.length / 2; i++)
    [res[i], res[str.length - 1 - i]] = [res[str.length - 1 - i], res[i]];

  return res.join('');
};

console.log(reverseString('hi11234'));
