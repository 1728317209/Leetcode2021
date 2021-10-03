/* eslint-disable no-param-reassign */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (root) {
    const { left, right } = root;
    root.left = invertTree(right);
    root.right = invertTree(left);
  }
  return root;
}
