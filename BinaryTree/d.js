/**
 * 广度优先遍历
 */
function traversal(root) {
  const arr = [root];
  while (arr.length > 0) {
    const { val, left, right } = arr.shift();
    console.log(val);
    if (left) {
      arr.push(left);
    }
    if (right) {
      arr.push(right);
    }
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

console.log(traversal(root));
