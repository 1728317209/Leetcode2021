// getElement 找目标节点，其实就是递归遍历，和树一样

function getElementById(node, id) {
  if (!node) {
    return null;
  }
  if (node.id === id) {
    return node;
  }
  let result = null;
  for (let i = 0; i < node.children.length; i += 1) {
    const temp = getElementById(node.children[i], id);
    if (temp) {
      result = temp;
      break;
    }
  }
  return result;
}
