// highlight('abcd123abcdc1abc2ab1aa', 'abcd');
// => <em>abcd</em>123<em>abcd</em>c1<em>abc</em>2<em>ab</em>1<em>a</em><em>a</em>
// abcd/abc/ab/a
function highlight(str, word) {
  const arr = str.split(word);
  console.log('highlight -> arr', arr);

  const result = arr.join(`<em>${word}</em>`);

  return result;
}

console.log(highlight('abcd123abcdc1abc2ab1aa', 'abcd'));
