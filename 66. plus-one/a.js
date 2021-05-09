/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let num = 0;
  const result = [];
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let sum;
    if (i === digits.length - 1) {
      sum = digits[i] + num + 1;
    } else {
      sum = digits[i] + num;
    }
    console.log('plusOne -> sum', sum);
    if (sum === 10) {
      num = 1;
      result.unshift(0);
    } else {
      num = 0;
      result.unshift(sum);
    }
    console.log('plusOne -> result', result);
  }
  if (num === 1) {
    result.unshift(num);
  }
  console.log('plusOne -> result', result);
  return result;
}

console.log(plusOne([1, 2, 3]));
