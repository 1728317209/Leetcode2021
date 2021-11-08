// [1, 2, 3, 4, 5, 1, 3, 3, 1, 2, 3, 56, 12];

/**
 * 出现次数最多的数字
 * @param {*} nums
 * @return {number}
 */
function fn(nums) {
  let result;
  let maxCount = 0;

  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    let count;
    const item = nums[i];
    if (!map.has(item)) {
      count = 1;
    } else {
      count = map.get(item) + 1;
    }
    map.set(item, count);

    if (count > maxCount) {
      result = item;
      maxCount = count;
    }
  }
  console.log('fn -> map', map);

  return result;
}

console.log(fn([1, 2, 3, 4, 5, 1, 3, 3, 1, 2, 3, 56, 12]));
