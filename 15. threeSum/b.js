/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i += 1) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j += 1;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k -= 1;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        i += 1;
        k -= 1;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
