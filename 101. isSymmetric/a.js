/**
 * 判断两棵二叉树树是否是镜像对称
 */
function isMirror(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
}

/**
 * 判断一棵二叉树是否镜像对称
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return isMirror(root, root);
}
