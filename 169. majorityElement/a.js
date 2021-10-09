/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let result;

  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const item = nums[i];
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }

    if (map.get(item) > nums.length / 2) {
      result = item; // 多数元素只有一个
      break;
    }
  }

  return result;
}
