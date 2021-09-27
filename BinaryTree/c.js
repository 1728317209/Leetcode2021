// 在手写一遍

function preOrderTraversal(root) {
  if (root) {
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

function inOrderTraversal(root) {
  if (root) {
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);
  }
}

function postOrderTraversal(root) {
  if (root) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);
  }
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
