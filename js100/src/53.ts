function check_right_parenthesis(str: String): Boolean {
  const stack: Array<String> = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '[' || str[i] === '(') stack.push(str[i]);
    else if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
      let stack_pop: String;
      stack_pop = stack.pop() || '0';
      if (
        stack_pop.charCodeAt(0) === str[i].charCodeAt(0) - 1 ||
        stack_pop.charCodeAt(0) === str[i].charCodeAt(0) - 2
      )
        continue;
      return false;
    }
  }
  if (stack.length) return false;
  else return true;
}

// true
if (check_right_parenthesis('(asdf)')) console.log('YES');
else console.log('NO');

//false
if (check_right_parenthesis('(asdf}')) console.log('YES');
else console.log('NO');
