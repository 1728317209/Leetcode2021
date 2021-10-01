/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  let result;

  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i += 1) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (result === undefined) {
        result = sum;
      } else if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (result === target) {
        break;
      }

      if (sum < target) {
        j += 1;
      } else if (sum > target) {
        k -= 1;
      } else {
        break;
      }
    }
  }

  return result;
}

console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
