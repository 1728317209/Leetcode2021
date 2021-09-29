/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[j] === val) {
      nums.pop();
      j -= 1;
    } else if (nums[i] === val) {
      nums[i] = nums[j];
      nums.pop();
      j -= 1;
      i += 1;
    } else {
      i += 1;
    }
  }

  return nums.length;
}

const nums = [3, 2, 2, 3];
const len = removeElement(nums, 3);
console.log('len', len);
console.log('nums', nums);
