/* eslint-disable no-use-before-define */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortList(head) {
  if (!head || !head.next) {
    return head;
  }

  let left = head;
  let right = head;
  while (right.next) {
    right = right.next;
    if (right.next) {
      left = left.next;
      right = right.next;
    }
  }

  console.log('head', head);
  const head1 = head;
  const head2 = left.next;
  left.next = null;
  console.log('head1', head1);
  console.log('head2', head2);

  return merge(sortList(head1), sortList(head2));
}

function merge(head1, head2) {
  const head = new ListNode();
  console.log('merge-head1', head1);
  console.log('merge-head2', head2);
  let cur = head;
  while (head1 && head2) {
    if (head1.val < head2.val) {
      cur.next = head1;
      cur = cur.next;
      head1 = head1.next;
    } else {
      cur.next = head2;
      cur = cur.next;
      head2 = head2.next;
    }
  }
  while (head1) {
    cur.next = head1;
    cur = cur.next;
    head1 = head1.next;
  }
  while (head2) {
    cur.next = head2;
    cur = cur.next;
    head2 = head2.next;
  }
  console.log('merge-head.next', head.next);
  return head.next;
}
