const { Node, arrToLinkedList, forEach } = require('./a');

/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
function fn(root1, root2) {
  const root = new Node();
  let cur = root;

  let head1 = root1;
  let head2 = root2;
  while (head1 && head2) {
    if (head1.val < head2.val) {
      cur.next = head1;
      head1 = head1.next;
    } else if (head1.val >= head2.val) {
      cur.next = head2;
      head2 = head2.next;
    }
    cur = cur.next;
  }
  if (head1) {
    cur.next = head1;
  }
  if (head2) {
    cur.next = head2;
  }

  return root.next;
}

const a = arrToLinkedList([1, 2, 4]);
const b = arrToLinkedList([1, 3, 4, 5]);

forEach(fn(a, b), (val) => {
  console.log('val', val);
});
