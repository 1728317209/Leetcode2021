// https://leetcode-cn.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
function reverse(n) {
  const negative = n < 0;
  if (negative) {
    n = -n;
  }

  let ret = 0;
  while (n) {
    const x = n % 10;
    ret = ret * 10 + x;
    n = (n - x) / 10;
  }

  if (ret > 2 ** 31) {
    return 0;
  }

  return negative ? -ret : ret;
}

console.log(reverse(123));
