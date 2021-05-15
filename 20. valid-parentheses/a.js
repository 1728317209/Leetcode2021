const map = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
]);

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const arr = [];
  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      arr.push(map.get(s[i]));
    } else if (arr.pop() !== s[i]) {
      return false;
    }
  }
  return arr.length === 0;
}

console.log(isValid('()[()]'));
