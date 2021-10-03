// 元素必须是有序的，如果是无序的则要先进行排序操作

function binarySearch1(arr, val, low, high) {
  const mid = Math.floor(low + (high - low) / 2); // 中间点
  if (arr[mid] > val) {
    return binarySearch1(arr, val, low, mid - 1); // 找左边
  }
  if (arr[mid] < val) {
    return binarySearch1(arr, val, mid + 1, high); // 找右边
  }
  return mid;
}

// 不需要指定 low high
function binarySearch2(arr, val) {
  let result = -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > val) {
      high = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      result = mid;
      break;
    }
  }
  return result;
}

const arr = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]; // 必须是有序的
console.log(binarySearch2(arr, 44, 0, arr.length - 1));
