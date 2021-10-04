/**
 * 在常数时间内检索到最小元素的栈
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(
        Math.min(val, this.minStack[this.minStack.length - 1])
      );
    }
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
