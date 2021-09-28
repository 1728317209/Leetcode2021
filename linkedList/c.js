const { arrToLinkedList, forEach } = require('./a');

/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
 */
function fn(root) {
  let cur = root;
  while (cur.next) {
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return root;
}

const a = arrToLinkedList([1, 1, 2, 3, 3]);

forEach(fn(a), console.log);
