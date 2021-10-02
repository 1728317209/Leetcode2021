const { Node, arrToLinkedList } = require('./a');

/**
 * 判断一个链表是否有环
 */
function fn1(head) {
  let result = false;

  let cur = head;
  while (cur) {
    if (cur.flag) {
      result = true;
      break;
    }

    cur.flag = true; // 会修改链表本身
    cur = cur.next;
  }

  return result;
}

/**
 * 判断一个链表是否有环
 */
function fn2(head) {
  let result = false;

  let cur = head;
  const set = new Set(); // 不会修改链表本身，但是空间复杂度大一些
  while (cur) {
    if (set.has(cur)) {
      result = true;
      break;
    }

    set.add(cur);
    cur = cur.next;
  }

  return result;
}

const a = arrToLinkedList([1, 2, 3, 4, 5]);

fn1(a, 2, 4).forEach(console.log);
