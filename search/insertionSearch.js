// 不需要指定 low high
function insertionSearch(arr, val) {
  let result = -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    // 假设 mid、low、high 和 val、arr[low]、arr[high] 的比例是相等的，这样可以让 arr[mid] 尽可能的接近 val，而不是傻瓜式的二分
    const mid = Math.floor(
      low + ((val - arr[low]) / (arr[high] - arr[low])) * (high - low)
    );
    console.log('mid, low, high', mid, low, high);
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
console.log(insertionSearch(arr, 44, 0, arr.length - 1));
