/* eslint-disable no-param-reassign */
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
function reverseList(head) {
  if (!head) {
    return head;
  }

  const first = head;
  let cur = head.next;
  while (cur) {
    first.next = cur.next;
    cur.next = head;
    head = cur;
    cur = first.next;
  }

  return head;
}
