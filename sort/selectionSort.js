/* eslint-disable no-param-reassign */
// 选择排序(Selection-sort)是一种简单直观的排序算法, 它的工作原理：
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

function selectionSort1(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let min = arr[start];
    let minIndex = start;
    let max = -Infinity;
    let maxIndex = end;
    for (let i = start; i <= end; i += 1) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }

    const t1 = arr[start];
    arr[start] = arr[minIndex];
    arr[minIndex] = t1;

    const t2 = arr[end];
    arr[end] = arr[maxIndex];
    arr[maxIndex] = t2;
    console.log('min, max, arr', min, max, arr.join(', '));

    start += 1;
    end -= 1;
  }

  return arr;
}

const arr = [3, 44, 5, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort1(arr).join(', '));
