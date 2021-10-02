/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
  construct(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    let value = -1;
    if (this.map.has(key)) {
      value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
    }
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.capacity) {
      // 删除最早的那一个，即 map 的第一项
      const { value: firstKey } = this.map.keys().next();
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }
}
