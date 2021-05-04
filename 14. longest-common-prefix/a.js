/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }

  let prefix = '';
  const firstStr = strs.shift();
  for (let i = 0; strs.every(str => firstStr[i] && str[i] === firstStr[i]); i += 1) {
    prefix += firstStr[i];
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
