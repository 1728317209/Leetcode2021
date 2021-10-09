/** 消除重复的元素 */
function fn(arr) {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j += 1;
      if (j === arr.length) {
        arr.splice(i, j - i);
        i -= 1;
        j = i + 1;
      }
    } else if (j - i === 1) {
      i += 1;
      j += 1;
    } else {
      arr.splice(i, j - i);
      i -= 1;
      j = i + 1;
    }
    console.log('fn -> i, j, arr.length', i, j, arr.length);
  }
  return arr;
}

console.log(fn([1, 3, 2, 2, 2, 3, 3]));
