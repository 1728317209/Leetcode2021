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
const levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const arr = [[root, 0]]; // 迭代遍历 保存每个节点的深度
  while (arr.length) {
    const [node, depth] = arr.shift();
    if (!result[depth]) {
      result[depth] = [node.val];
    } else {
      result[depth].push(node.val);
    }
    if (node.left) {
      arr.push([node.left, depth + 1]);
    }
    if (node.right) {
      arr.push([node.right, depth + 1]);
    }
  }

  return result;
};

const moveZeroes = function (nums) {
  let i = 0;
  let j = 1;
  while (i < nums.length) {
    if (nums[j] === 0) {
      j += 1;
    } else if (nums[i] !== 0) {
      i += 1;
    } else {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i += 1;
      j += 1;
    }
  }
};
