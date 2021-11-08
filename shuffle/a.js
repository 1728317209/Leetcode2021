/* eslint-disable no-param-reassign */

/**
 * 随机打乱数组的顺序
 */
function shuffle(arr) {
  let i = arr.length - 1;
  while (i >= 0) {
    const random = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
    i -= 1;
  }
  return arr;
}

console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
