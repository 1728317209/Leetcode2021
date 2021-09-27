/* eslint-disable no-param-reassign */
function sumOfThreeNumbers(arr, sum) {
  const result = [];

  // [-1, -1, -4, 0, 1, 2]
  arr = arr.sort();
  let i = 0;
  let j = i + 1;
  let k = arr.length - 1;
  while (i <= arr.length - 3 && j < k) {
    if (arr[i] + arr[j] + arr[k] === sum) {
      result.push([arr[i], arr[j], arr[k]]);
      i += 1;
      j = i + 1;
      k = arr.length - 1;
    } else if (arr[i] + arr[j] + arr[k] < sum) {
      j += 1;
    } else {
      k -= 1;
    }
  }

  return result;
}

console.log(sumOfThreeNumbers([-1, 0, 1, 2, -1, -4], 0));
