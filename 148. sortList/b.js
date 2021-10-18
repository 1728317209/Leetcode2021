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

const toSortList = (head, tail) => {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow = head,
    fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  return merge(toSortList(head, slow), toSortList(slow, tail));
};

var sortList = function (head) {
  return toSortList(head, null);
};
