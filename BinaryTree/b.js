/**
 * 先序遍历二叉树
 */
function preOrderTraversal(root) {
  if (!root) {
    return;
  }
  console.log(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

/**
 * 中序遍历二叉树
 */
function inOrderTraversal(root) {
  if (!root) {
    return;
  }
  preOrderTraversal(root.left);
  console.log(root.val);
  preOrderTraversal(root.right);
}

/**
 * 后序遍历二叉树
 */
function postOrderTraversal(root) {
  if (!root) {
    return;
  }
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
}

const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

console.log('preOrderTraversal');
console.log(preOrderTraversal(root));

console.log('inOrderTraversal');
console.log(inOrderTraversal(root));

console.log('postOrderTraversal');
console.log(postOrderTraversal(root));
