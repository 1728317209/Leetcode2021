/**
 * 存储push进来的较大的len个值
 */
class MinStack {
  constructor(len) {
    this.maxCount = len;
    this.min = undefined;
    this.count = 0;
    this.map = new Map();
  }

  add(val) {
    if (!this.map.has(val)) {
      this.map.set(val, 1);
    } else {
      this.map.set(val, this.map.get(val) + 1);
    }
  }

  delete(val) {
    const count = this.map.get(val);
    if (count === 1) {
      this.map.delete(val);
    } else {
      this.map.set(val, count - 1);
    }
  }

  push(val) {
    if (this.count < this.maxCount) {
      this.set(val);
      this.min = Math.min(this.min, val);
      this.count += 1;
    } else if (val > this.min) {
      this.delete(this.min);
      this.set(val);
      this.min = Math.min(this.min, val);
    }
  }
}
