const { Node, arrToLinkedList, forEach } = require('./a');

/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现的数字。
 */
function fn(root) {
  if (!root || !root.next) {
    return root;
  }

  const dummy = new Node(null, root); // dummy.next = root
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const { val } = cur.next;
      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}

const a = arrToLinkedList([1, 2, 3, 3, 4, 4, 5]);

forEach(fn(a), console.log);
