/* eslint-disable no-console */
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
 * @return {number}
 */
function maxDepth(root) {
  let result = 0;
  let depth = 0;
  function preOrderTraversal(head) {
    if (head) {
      depth += 1;
      result = Math.max(depth, result);
      console.log('root -> root.left, depth+1');
      preOrderTraversal(root.left);
      console.log('root.left -> root.right, depth不变');
      preOrderTraversal(root.right);
      console.log('root.right -> root, depth-1');
      depth -= 1;
      result = Math.max(depth, result);
    }
  }

  preOrderTraversal(root);

  return result;
}
