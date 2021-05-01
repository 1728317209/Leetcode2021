// https://leetcode-cn.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let sum = new ListNode(0); // 计算结果链表
  let head = sum; // head 是头部指针 用来保留最终结果，因为 sum 需要不断 next
  let carry = 0; // 进位 0|1

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    sum.next = new ListNode((val1 + val2 + carry) % 10);
    sum = sum.next;
    carry = Math.floor((val1 + val2 + carry) / 10); // 本轮循环计算出来的进位，在下一轮循环中使用
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  // 最后如果 carry 不为 0，再加上 carry
  if (carry) {
    sum.next = new ListNode(carry);
  }
  return head.next;
}

const a = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    ),
  ),
);
const b = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
let result = addTwoNumbers(a, b);
while (result) {
  console.log(result.val);
  result = result.next;
}
