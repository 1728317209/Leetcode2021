// 回文字符串

/**
 * 判断 str 删除一个字符能否变成回文字符串
 *
 * @param {*} str
 */
function test(str) {
  let count = 0;

  let i = 0;
  let j = str.length - 1;
  while (count < 1 && i < j) {
    if (str[i] === str[j]) {
      i += 1;
      j -= 1;
    } else if (j - i === 1) {
      i += 1; // 或者 j -= 1
      count += 1;
    } else if (str[i + 1] === str[j]) {
      console.log(str[i]);
      i += 1;
      count += 1;
    } else if (str[i] === str[j - 1]) {
      console.log(str[j]);
      j += 1;
      count += 1;
    } else {
      count += 2;
    }
    console.log('test -> i, j, count', i, j, count);
  }

  return count <= 1;
}

console.log(test('abca'));
