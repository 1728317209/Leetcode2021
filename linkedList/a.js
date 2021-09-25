// JS 中的链表，是以嵌套的对象的形式来实现的：

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// function arrToLinkedList(arr) {
//   const head = new Node(arr[0]);
//   let cur = head;
//   for (let i = 1; i < arr.length; i += 1) {
//     const node = new Node(arr[i]);
//     cur.next = node;
//     cur = cur.next;
//   }
//   return head;
// }

function arrToLinkedList(arr) {
  let node = new Node(arr[arr.length - 1]);
  for (let i = arr.length - 2; i >= 0; i -= 1) {
    node = new Node(arr[i], node);
  }
  return node;
}

console.log(arrToLinkedList([1, 2, 3, 4, 5]));
