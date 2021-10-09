/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  // 是整数
  if (n % 1 !== 0) {
    return false;
  }
  // 是偶数
  if (n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}
