/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  // 有一个就是root节点
  if (p.val === root.val || q.val === root.val) {
    return root;
  }
  // 一左一右
  if (p.val < root.val && q.val > root.val) {
    return root;
  }
  // 一左一右
  if (p.val > root.val && q.val < root.val) {
    return root;
  }
  // 都在左边
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // 都在右边
  return lowestCommonAncestor(root.right, p, q);
}
