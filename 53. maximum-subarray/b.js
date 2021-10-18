/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
  }
  console.log('maxSubArray -> nums', nums);
  return Math.max(...nums);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
