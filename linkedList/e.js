const { Node, arrToLinkedList } = require('./a');

// /**
//  * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
//  */
// function fn(root, n) {
//   let newRoot = null;
//   let cur = root;
//   // 先反转链表
//   while (cur) {
//     newRoot = new Node(cur.val, newRoot);
//     cur = cur.next;
//   }

//   let count = 0;
//   newRoot = new Node(null, newRoot);
//   let newCur = newRoot;
//   while (newCur) {
//     count += 1;
//     if (count === n) {
//       newCur.next = newCur.next.next;
//       break;
//     } else {
//       newCur = newCur.next;
//     }
//   }
//   return newRoot.next;
// }

/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
 * 使用双指针，快、慢指针，快慢指针之间差 n 步，当快指针走到尾部时，慢指针就是在倒数第 n+1 个
 */
function fn(root, n) {
  const head = new Node(null, root);
  let i = head;
  let j = head;
  let step = 0;
  while (j.next) {
    step += 1;
    j = j.next;
    if (step > n) {
      i = i.next;
    }
  }
  i.next = i.next.next;
  return head.next;
}

const a = arrToLinkedList([1, 2, 3, 4, 5]);

fn(a, 2).forEach(console.log);
