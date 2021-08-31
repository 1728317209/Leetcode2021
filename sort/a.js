// 排序数组去重，要求不新建情况下返回去重后的新数组元素个数

function fn1(arr) {
  const set = new Set(arr); // 新建了 set

  return set.size;
}

console.log(fn1([1, 2, 2, 3, 4, 5]));

function fn2(arr) {
  let count = 0;
  let preItem;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0 || arr[i] !== preItem) {
      count += 1;
    }
    preItem = arr[i];
  }

  return count;
}

console.log(fn2([1, 2, 2, 3, 4, 5]));
