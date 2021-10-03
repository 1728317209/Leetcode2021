/* eslint-disable no-continue */
/**
 * 判断两棵二叉树树是否是镜像对称
 */
function isMirror(root1, root2) {
  const arr = [];
  arr.push(root1, root2);
  while (arr.length > 0) {
    const a = arr.shift();
    const b = arr.shift();

    if (!a && !b) {
      continue;
    }
    if (!a || !b) {
      return false;
    }
    if (a.val !== b.val) {
      return false;
    }

    arr.push(a.left);
    arr.push(b.right);
    arr.push(a.right);
    arr.push(b.left);
  }

  return true;
}

/**
 * 判断一棵二叉树是否镜像对称
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return isMirror(root, root);
}
