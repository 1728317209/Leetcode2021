/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  const head = new ListNode();
  let cur = head;
  while (lists.some((list) => !!list)) {
    if (lists.length === 1) {
      cur.next = lists[0];
      break;
    }

    let minList = null;
    let minIndex = -1;
    let minValue = Infinity;
    for (let i = 0; i < lists.length; i += 1) {
      const list = lists[i];
      if (list && list.val < minValue) {
        minList = list;
        minIndex = i;
        minValue = list.val;
      }
    }
    cur.next = minList;
    cur = cur.next;
    if (!minList.next) {
      lists.splice(minIndex, 1);
    } else {
      lists[minIndex] = minList.next;
    }
  }
  return head.next;
}
