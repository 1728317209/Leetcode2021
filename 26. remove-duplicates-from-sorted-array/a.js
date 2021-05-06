/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return nums.length;
  }

  let len = 1;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      len += 1;
      nums[len - 1] = nums[i];
    }
  }
  return len;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log('len', removeDuplicates(nums));
