// highlight('abcd123abcdc1abc2ab1aa', 'abcd');
// => <em>abcd</em>123<em>abcd</em>c1<em>abc</em>2<em>ab</em>1<em>a</em><em>a</em>
// abcd/abc/ab/a

// abcd 123 abcd c1abc2ab1aa

function highlight(str, word) {
  if (word.length === 0 || str.length === 0) {
    return str;
  }

  let result = '';
  const arr = str.split(word);
  arr.forEach((item, index) => {
    result += highlight(item, word.slice(0, word.length - 1));
    if (index < arr.length - 1) {
      result += `<em>${word}</em>`;
    }
  });
  return result;
}

console.log(highlight('abcd123abcdc1abc2ab1aa', 'abcd'));
// console.log(highlight('bcd', 'abcd'));
