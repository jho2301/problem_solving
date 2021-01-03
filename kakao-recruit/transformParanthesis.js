function solution(p) {
  if (!p) return '';
  const [u, v] = splitParen(p);
  if (isValid(u)) return u + solution(v);
  else return `(${solution(v)})` + flip(u.slice(1, -1));
}

function splitParen(p) {
  let u = '';
  let r = 0;
  let l = 0;

  for (let i = 0; i < p.length; i++) {
    u += p[i];
    if (p[i] === '(') r++;
    else l++;

    if (r === l) break;
  }

  return [u, p.slice(r + l)];
}

function isValid(p) {
  const splitted = p.split('');
  const stack = [];
  for (let el of splitted) {
    if (el === '(') stack.push(el);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return true;
}

function flip(p) {
  return p
    .split('')
    .map((c) => (c === '(' ? ')' : '('))
    .join('');
}

console.log(solution('()'));
console.log(solution(')('));
console.log(solution('"()))((()"'));
