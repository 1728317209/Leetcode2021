/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    // 先将右指针指向一个不等于 val 的数，相等的删掉
    if (nums[j] === val) {
      nums.pop();
      j -= 1;
    } else if (nums[i] === val) {
      // 执行到这里的时候右指针不等于 val 而左指针等于 val
      // 将左、右指针交换，再删掉右指针的值
      nums[i] = nums[j];
      nums.pop();
      j -= 1;
      i += 1;
    } else {
      i += 1;
    }
  }

  return nums.length;
}

const nums = [3, 2, 2, 3];
const len = removeElement(nums, 3);
console.log('len', len);
console.log('nums', nums);
