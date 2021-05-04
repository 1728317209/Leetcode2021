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
  const firstStr = strs.shift();
  if (firstStr.length === 0) {
    return '';
  }
  let start = 0;
  let end = firstStr.length;
  while (start < end) {
    const middle = Math.ceil((end + start) / 2);
    // eslint-disable-next-line no-loop-func
    if (strs.every(str => str.slice(start, middle) === firstStr.slice(start, middle))) {
      start = middle;
    } else {
      end = middle - 1;
    }
  }
  return firstStr.slice(0, start);
}

// console.log(longestCommonPrefix(['ab', 'a']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
