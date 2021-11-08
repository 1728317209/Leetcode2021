// input: 123456789.2333
// output: 123,456,789.2333

function fn(num) {
  const str = num.toString();
  const [a, b] = str.split('.'); // a 整数 b 小数
  let c = ''; // 修改后的整数部分
  let i = 0; // 从后向前遍历但是从0开始计数
  while (i < a.length) {
    const item = a[a.length - 1 - i];
    if (i > 0 && i % 3 === 0) {
      c = `${item},${c}`;
    } else {
      c = `${item}${c}`;
    }
    console.log('fn -> i, a[i]', i, item, c);
    i += 1;
  }
  if (b === undefined) {
    return c;
  }
  return `${c}.${b}`;
}

console.log(fn(1234567890.2333));
