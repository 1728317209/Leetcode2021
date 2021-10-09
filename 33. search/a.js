/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let result = -1;
  if (target >= nums[0]) {
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === target) {
        result = i;
        break;
      }
    }
  } else {
    for (j = nums.length - 1; j >= 0; j -= 1) {
      if (nums[j] === target) {
        result = j;
        break;
      }
    }
  }
  return result;
};
