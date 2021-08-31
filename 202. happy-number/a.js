/* eslint-disable no-param-reassign */
const record = new Set();
/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const nums = [];
  while (n > 0) {
    nums.unshift(n % 10);
    n = (n - (n % 10)) / 10;
  }
  console.log('isHappy -> nums', nums);
  let sum = 0;
  nums.forEach(num => {
    sum += num * num;
  });
  console.log('isHappy -> sum', sum);
  if (sum === 1) {
    record.clear();
    return true;
  }
  if (record.has(sum)) {
    record.clear();
    return false;
  }
  record.add(sum);
  return isHappy(sum);
}

console.log(isHappy(13));
