/* eslint-disable no-continue */
/* eslint-disable no-use-before-define */

/**
 * 归并排序
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pos = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, pos);
  const arr2 = arr.slice(pos);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

/**
 * 两个有序的子数组 合并 生成一个更大的有序数组
 */
function merge(arr1, arr2) {
  console.log('merge -> arr1', arr1.join(', '));
  console.log('merge -> arr2', arr2.join(', '), '\n');
  const result = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
  }

  return result;
}

console.log(
  mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]).join(', ')
);
