/* eslint-disable no-param-reassign */
// 1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// 3. 针对所有的元素重复以上的步骤，除了最后一个；
// 4. 重复步骤1~3，直到排序完成。

/**
 * 冒泡排序
 * 交换相邻的两个数，这样每一轮都会把最大的数放到末尾
 */
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // [arr.length-i-1, arr.length) 区间内的数是已经排好序的最大的数，不用再遍历了
    for (let j = 0; j < arr.length - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 * 冒泡排序
 * 改进：记录上一次交换的位置 pos，pos 之后的说明都排好序了
 */
function bubbleSort2(arr) {
  let i = arr.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        pos = j;
      }
    }
    i = pos;
  }
  return arr;
}

/**
 * 冒泡排序
 * 改进：每一次遍历，找出一个最大值和一个最小值
 */
function bubbleSort3(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    for (let j = low; j < high; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log('arr', arr.join(', '));
      }
    }
    high -= 1;

    for (let j = high; j > low; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        console.log('arr', arr.join(', '));
      }
    }
    low += 1;
  }
  return arr;
}

/**
 * 冒泡排序
 * 从大到小
 */
function bubbleSort4(arr) {
  let i = arr.length - 1;
  while (i > 0) {
    let pos = 0;
    for (let j = 0; j < i; j += 1) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        pos = j;
      }
    }
    i = pos;
  }
  return arr;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log(bubbleSort1(arr).join(', '));
// console.log(bubbleSort2(arr).join(', '));
console.log(bubbleSort4(arr).join(', '));
