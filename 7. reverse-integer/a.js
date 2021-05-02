// https://leetcode-cn.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  if (x < 0 - 2 ** 31) {
    return 0;
  }

  if (x < 0) {
    return -reverse(-x);
  }

  const num = Number(String(x).split('').reverse().join(''));
  const max = 2 ** 31 - 1;
  return num > max ? 0 : num;
}

console.log(reverse(-123));
