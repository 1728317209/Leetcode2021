// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const nums = [];
  const length = nums1.length + nums2.length;

  while (nums1.length || nums2.length) {
    if (nums1.length === 0) {
      nums.push(...nums2);
      break;
    }
    if (nums2.length === 0) {
      nums.push(...nums1);
      break;
    }
    if (nums1[0] < nums2[0]) {
      nums.push(nums1.shift());
    } else if (nums1[0] > nums2[0]) {
      nums.push(nums2.shift());
    } else {
      nums.push(nums1.shift(), nums2.shift());
    }
    if (nums.length > length / 2) { // 两个数组不用合并完，足够计算中位数即可
      break;
    }
  }

  console.log('findMedianSortedArrays -> nums', nums);
  if (length % 2 !== 0) {
    return nums[Math.floor(length / 2)];
  }
  return (nums[length / 2] + nums[length / 2 - 1]) / 2;
}

console.log(findMedianSortedArrays([1, 3], [2, 4]));
