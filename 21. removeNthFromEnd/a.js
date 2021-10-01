// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const root = new ListNode(0, head);

  let left = root;
  let right = root.next;
  let step = 1;
  while (right) {
    if (step > n) {
      left = left.next;
    }
    right = right.next;
    step += 1;
  }
  left.next = left.next.next;

  return root.next;
}
