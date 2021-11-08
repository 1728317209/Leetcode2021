/* eslint-disable no-param-reassign */
// 根据最小位进行排序 相同则根据进位排序 例：
// in: [1, 20, 33, 31, 50]
// out: [20, 50, 1, 31, 33]

const map = new Map();

/**
 * num1 > num2 返回 1
 * num1 < num2 返回 -1
 * num1 === num2 返回 0
 */
function compare(num1, num2) {
  if (num1 === num2) {
    return 0;
  }

  let result = 0;
  const str1 = num1.toString();
  const str2 = num2.toString();
  let i = str1.length - 1;
  let j = str2.length - 1;
  while (i >= 0 && j >= 0) {
    if (str1[i] > str2[j]) {
      result = 1;
      break;
    }
    if (str1[i] < str2[j]) {
      result = -1;
      break;
    }
    i -= 1;
    j -= 1;
  }
  if (result === 0) {
    result = i > j ? 1 : -1;
  }

  return result;
}

function fn(arr) {
  // 冒泡排序
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 1; j < arr.length - i; j += 1) {
      if (compare(arr[j - 1], arr[j]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
    console.log('fn -> arr', i, arr);
  }
  return arr;
}

console.log(fn([1, 20, 33, 31, 50]));
