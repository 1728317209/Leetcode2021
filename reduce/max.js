function max(arr) {
  if (arr.length === 0) {
    throw new Error('arr is empty');
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.reduce((pre, cur) => {
    if (pre > cur) {
      return pre;
    }
    return cur;
  }, -Infinity);
}

const arr = [6, 4, 1, 8, 2, 11, 23];
console.log(max(arr));
