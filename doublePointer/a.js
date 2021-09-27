/* eslint-disable no-param-reassign */
/**
 * 把 nums2 合并到 nums1 中
 *
 * @param {*} nums1
 * @param {*} len1
 * @param {*} nums2
 * @param {*} len2
 * @returns
 */
function merge(nums1, len1, nums2, len2) {
  let i = len1 - 1;
  let j = len2 - 1;

  while (j >= 0) {
    if (i < 0 || nums1[i] <= nums2[j]) {
      nums1[i + j + 1] = nums2[j];
      j -= 1;
    } else {
      nums1[i + j + 1] = nums1[i];
      i -= 1;
    }
    console.log('merge -> i', i);
    console.log('merge -> j', j);
    console.log('merge -> nums1', nums1);
  }

  return nums1;
}

const a = [10, 11, 12, 0, 0, 0];
const b = [2, 5, 6];

console.log(merge(a, 3, b, 3));
