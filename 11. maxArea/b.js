/**
 * @param {number[]} nums
 * @return {number}
 */
function maxArea(nums) {
  let result = 0;

  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const area = Math.min(nums[i], nums[j]) * (j - i);
    if (area > result) {
      result = area;
    }
    if (nums[i] <= nums[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return result;
}

console.log(maxArea([1, 2, 1]));
