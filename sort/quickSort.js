/* eslint-disable no-param-reassign */
// 快速排序的基本思想：
// 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。

/**
 * 快速排序
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const middleValue = arr[middleIndex];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < middleValue) {
      leftArr.push(arr[i]);
    } else if (arr[i] > middleValue) {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), middleValue, ...quickSort(rightArr)];
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr, 0, arr.length - 1).join(', ')); // [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
