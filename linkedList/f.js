const { arrToLinkedList } = require('./a');

/**
 * 反转链表
 * 使用三指针
 */
function fn(root) {
  let pre = null;
  let cur = root;
  let { next } = cur;
  while (cur) {
    cur.next = pre;
    pre = cur;
    cur = next;
    next = next ? next.next : null;
    console.log('fn -> pre', pre);
    console.log('fn -> cur', cur);
    console.log('fn -> next', next);
  }

  return pre;
}

const a = arrToLinkedList([1, 2, 3, 4, 5]);

fn(a).forEach(console.log);
