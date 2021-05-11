/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  const realNums1 = nums1.slice(0, m);
  let i = m;
  let j = n;
  while (i > 0 || j > 0) {
    if (j === 0 || realNums1[i - 1] > nums2[j - 1]) {
      nums1[i + j - 1] = realNums1[i - 1];
      i -= 1;
    } else {
      nums1[i + j - 1] = nums2[j - 1];
      j -= 1;
    }
  }
}

const [a, b, c, d] = [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3];

console.log('a, b, c, d', a, b, c, d);
console.log(merge(a, b, c, d));
console.log('a, b, c, d', a, b, c, d);
