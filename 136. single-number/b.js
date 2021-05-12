/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  throw new Error('invalid nums');
}

console.log(singleNumber([4, 1, 2, 1, 2]));
