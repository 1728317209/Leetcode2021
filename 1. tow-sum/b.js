// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const anotherNum = target - num;
    if (map.has(anotherNum)) {
      return [map.get(anotherNum), i];
    }
    map.set(num, i);
  }
  return [];
}

const result = twoSum([3, 2, 4], 6);
console.log(result);

/**
 * 优化思路：以空间换时间，将遍历过的数据和其对应的下标存入 map
 * 查找 map 中是否有与当前元素匹配的元素
 * 查找 map 比查找 array 更节省时间，n*n -> n*1
 *
 * Map: https://es6.ruanyifeng.com/#docs/set-map
 */
