/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
o;
const search = function (nums, target) {
  if (nums.length === 0) {
    return false;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const mid = Math.floor((j - i) / 2) + i;
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      if (target >= nums[0] && target < nums[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    if (nums[0] > nums[mid]) {
      if (target > nums[mid] && target <= nums[nums.length - 1]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1;
};
