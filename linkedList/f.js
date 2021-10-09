const { arrToLinkedList } = require('./a');

/**
 * 反转链表
 * 使用三指针
 */
function fn(head) {
  if (!head) {
    return head;
  }

  let pre = head;
  let cur = head.next;
  while (cur) {
    const { next } = cur;
    cur.next = pre;
    pre = cur;
    cur = next;
    head.next = cur;
  }
  return pre;
}

const a = arrToLinkedList([1, 2, 3, 4, 5]);

fn(a).forEach(console.log);
