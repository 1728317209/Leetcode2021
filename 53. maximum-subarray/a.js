/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let curVal = 0;
  let preSum = 0;
  let curSum = 0;
  let maxSum = null;
  for (let i = 0; i < nums.length; i += 1) {
    curVal = nums[i];
    preSum = curSum;
    if (preSum > 0) {
      curSum = preSum + curVal;
    } else {
      curSum = curVal;
    }
    if (maxSum === null || curSum > maxSum) {
      maxSum = curSum;
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
