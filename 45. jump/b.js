/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let step = 0; // 跳跃次数
  let end = 0; // 下一次起跳点范围结束的格子
  let maxPos = 0; // 能跳到最远的距离
  for (let i = 0; i < nums.length - 1; i += 1) {
    maxPos = Math.max(nums[i] + i, maxPos);
    if (i === end) {
      end = maxPos;
      step += 1;
    }
  }
  return step;
}

console.log(jump([2, 3, 0, 1, 4]));
