function rearrange(logs) {
  const alphaLogs = [];
  const numberLogs = [];

  logs.forEach((log) => {
    const logCharCode = log.split(' ')[1].charCodeAt(0);
    if (logCharCode >= '0'.charCodeAt(0) && logCharCode <= '9'.charCodeAt(0))
      numberLogs.push(log);
    else alphaLogs.push(log);
  });

  numberLogs.sort()

  return alphaLogs.concat(numberLogs);
}

const logs = [
  'digi 8 1 5 1',
  'let1 art can',
  'digi2 3 6',
  'let2 own kit dig',
  'let4 art zero',
];

console.log(rearrange(logs));
