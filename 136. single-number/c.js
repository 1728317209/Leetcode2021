/* eslint-disable no-bitwise */
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let num = 0;
  for (let i = 0; i < nums.length; i += 1) {
    num ^= nums[i];
  }
  return num;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
