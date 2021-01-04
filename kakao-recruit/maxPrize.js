const solution = (s) => {
  const answer = [];
  const priorities = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '+', '*'],
    ['-', '*', '+'],
  ];
  const parsedS = parse(s);
  let temp = [...parsedS];
  priorities.forEach((priority) => {
    priority.forEach((operator) => {
      temp = calc(temp, operator);
    });
    answer.push(Math.abs(temp[0]));
    temp = [...parsedS];
  });

  return Math.max(...answer);
};

function parse(s) {
  const answer = [];
  s = s.split('');
  for (let i = 0; i < s.length - 1; i++)
    if (/[0-9]/.test(s[i]) && /[0-9]/.test(s[i + 1])) {
      s[i + 1] = s[i] + s[i + 1];
    } else {
      answer.push(s[i]);
    }
  answer.push(s[s.length - 1]);

  return answer.map((el) => (/[0-9]/.test(el) ? parseInt(el) : el));
}

function calc(arr, operator) {
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === operator) {
      if (operator === '*') arr.splice(idx - 1, 3, arr[idx - 1] * arr[idx + 1]);
      else if (operator === '-')
        arr.splice(idx - 1, 3, arr[idx - 1] - arr[idx + 1]);
      else if (operator === '+')
        arr.splice(idx - 1, 3, arr[idx - 1] + arr[idx + 1]);
      idx -= 1;
    }
  }

  return arr;
}

console.log('answer:', solution('50*6-3*2'));
