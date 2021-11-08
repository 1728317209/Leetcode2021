// 写一个阿拉伯数字转中文的方法
// toChineseNum(2345) //  二千三百四十五
// toChineseNum(341205)//  三十四万一千二百零五
// toChineseNum(340001200567)//  三千四百亿零一百二十万零五百六十七

const map = {
  0: '零',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
};

const arr = [
  '',
  '十',
  '百',
  '千',
  '万',
  '十',
  '百',
  '千',
  '亿',
  '十',
  '百',
  '千',
  '万',
];

function toChineseNum(num) {
  const str = `${num}`;

  let result = '';
  let carry = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    let temp = '';
    if (str[i] !== '0' || str[i + 1] !== '0') {
      temp = map[str[i]];
    }
    if (str[i] !== '0' || arr[carry] === '万' || arr[carry] === '亿') {
      temp += arr[carry];
    }
    result = temp + result;
    carry += 1;
  }
  console.log('result', result);
  return result;
}

toChineseNum(2345); //  二千三百四十五
toChineseNum(341205); //  三十四万一千二百零五
toChineseNum(340001200567); //  三千四百亿零一百二十万零五百六十七
toChineseNum(3400012005670);
