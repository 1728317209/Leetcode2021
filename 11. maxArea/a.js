/**
 * @param {number[]} nums
 * @return {number}
 */
function maxArea(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const area = Math.min(nums[i], nums[j]) * (j - i);
      if (area > result) {
        result = area;
      }
    }
  }

  return result;
}

console.log(maxArea([1, 2, 1]));
