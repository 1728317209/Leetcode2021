/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return nums.length;
  }

  let len = 1;
  for (let i = 1; i < nums.length; i += 1) {
    console.log(
      'removeDuplicates -> i, nums[i], nums[i - 1]',
      i,
      nums[i],
      nums[i - 1]
    );
    if (nums[i] !== nums[i - 1]) {
      len += 1; // len 是目前去重后的 前半部分数组的长度
      nums[len - 1] = nums[i]; // nums[i] 是一个新的 不重复的元素，将这个元素放在它应该呆在的位置上 即 len-1，之前 len-1位置上的元素是重复的 覆盖它就行
      console.log('removeDuplicates -> nums', nums.join(', '));
    }
  }
  return len;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log('len', removeDuplicates(nums));
console.log('nums', nums);
