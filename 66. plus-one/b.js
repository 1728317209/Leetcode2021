/* eslint-disable no-param-reassign */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let num = 0;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let sum;
    if (i === digits.length - 1) {
      sum = digits[i] + num + 1;
    } else {
      sum = digits[i] + num;
    }
    if (sum === 10) {
      num = 1;
      digits[i] = 0;
    } else {
      num = 0;
      digits[i] = sum;
      break; // 退出循环
    }
  }
  if (num === 1) {
    digits.unshift(1);
  }
  return digits;
}

console.log(plusOne([1, 2, 9]));
