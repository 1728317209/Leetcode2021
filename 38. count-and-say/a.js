function description(str) {
  let ret = '';
  let count = 1;
  for (let j = 1; j < str.length + 1; j += 1) {
    if (str[j] === str[j - 1]) {
      count += 1;
    } else {
      ret += `${count}${str[j - 1]}`;
      count = 1;
    }
  }
  return ret;
}

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let ret = '1';
  for (let i = 1; i < n; i += 1) {
    ret = description(ret);
    console.log('countAndSay -> ret', ret);
  }
  return ret;
}

console.log(countAndSay(4));
