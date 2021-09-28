const { Node, arrToLinkedList } = require('./a');

/**
 * 局部反转链表
 * 使用三指针
 */
function fn(root, m, n) {
  let head = root;

  let left;
  let pre = null;
  let cur = head;
  let { next } = cur;
  let step = 0;
  while (cur) {
    step += 1;
    if (step < m) {
      pre = cur;
      cur = next;
      next = next.next;
    }
    if (step === m) {
      left = pre;
    }
    if (step >= m && step <= n) {
      cur.next = pre;
      pre = cur;
      cur = next;
      next = next ? next.next : null;
    }
    if (step === n) {
      if (!left) {
        head.next = cur;
        head = pre;
      } else {
        left.next.next = cur;
        left.next = pre;
      }

      break;
    }
  }

  return head;
}

const a = arrToLinkedList([1, 2, 3, 4, 5]);

fn(a, 2, 4).forEach(console.log);
