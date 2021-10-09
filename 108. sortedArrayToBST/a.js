/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  const pos = Math.floor(nums.length / 2); // 数组从中间分成两半
  const val = nums[pos];
  const left = sortedArrayToBST(nums.slice(0, pos)); // 数组左边部分用来构建左子树
  const right = sortedArrayToBST(nums.slice(pos + 1)); // 数组右边部分用来构建右子树
  return new TreeNode(val, left, right);
}
