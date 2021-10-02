/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let result = false;

  const set = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    if (set.has(nums[i])) {
      result = true;
      break;
    } else {
      set.add(nums[i]);
    }
  }

  return result;
}
