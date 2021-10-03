/* eslint-disable no-param-reassign */
// 一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

// <1>.从第一个元素开始，该元素可以认为已经被排序；
// <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
// <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
// <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// <5>.将新元素插入到该位置后；
// <6>.重复步骤2~5。

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let j = i - 1;
    const key = arr[i];
    while (j >= 0 && arr[j] >= key) {
      arr[j + 1] = arr[j]; // 把已排序的元素都往后移一位
      j -= 1;
      console.log('insertionSort -> arr 1:', arr.join(', '));
    }
    arr[j + 1] = key; // 把新的元素插到已排序里
    console.log('insertionSort -> arr 2:', arr.join(', '));
  }
  return arr;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr, 0, arr.length - 1).join(', '));
