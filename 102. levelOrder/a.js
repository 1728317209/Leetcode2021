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
 * @return {number[][]}
 */
const levelOrder = function (_root) {
  const result = [];
  let depth = 0;
  function preOrder(root) {
    if (root) {
      if (!result[depth]) {
        result[depth] = [root.val];
      } else {
        result[depth].push(root.val);
      }
      depth += 1;
      preOrder(root.left);
      preOrder(root.right);
      depth -= 1;
    }
  }
  preOrder(_root);
  return result;
};
