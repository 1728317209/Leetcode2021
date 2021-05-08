function description(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] && str[i] === str[i - 1]) {
      arr[arr.length - 1].push(str[i]);
    } else {
      arr.push([str[i]]);
    }
  }
  console.log('countAndSay -> arr', arr);
  let result = '';
  for (let j = 0; j < arr.length; j += 1) {
    result += (`${arr[j].length}${arr[j][0]}`);
  }
  console.log('countAndSay -> result', result);
  return result;
}

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  console.log('countAndSay -> n', n);
  if (n === 1) {
    return '1';
  }
  return description(countAndSay(n - 1));
}

console.log(countAndSay(4));
