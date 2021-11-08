// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
// 回文字符串 是正着读和倒过来读一样的字符串。
// 子字符串 是字符串中的由连续字符组成的一个序列。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
/**
 * 是否是回文字符串
 */
function isHuiWen(s) {
  if (s.length === 0) {
    return false;
  }
  if (s.length === 1) {
    return true;
  }
  let result = true;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      result = false;
      break;
    }
    i += 1;
    j -= 1;
  }
  console.log('isHuiWen-s', s, result);
  return result;
}

/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  // 遍历字符串 s，找到以 i 开头的所有回文字符串
  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
    let temp = '';
    for (let j = i; j < s.length; j += 1) {
      temp += s[j];
      console.log('i, j, temp', i, j, temp);
      if (isHuiWen(temp)) {
        count += 1;
      } else {
        break;
      }
    }
  }
  return count;
}

console.log(countSubstrings('aaa'));
// a aa aaa
// a aa
// a

// console.log(isHuiWen('aaa'));
