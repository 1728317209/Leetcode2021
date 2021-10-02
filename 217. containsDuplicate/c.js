/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const set = new Set();
  return nums.some((num) => {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
    return false;
  });
}
