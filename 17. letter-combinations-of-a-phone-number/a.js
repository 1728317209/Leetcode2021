/* eslint-disable no-loop-func */

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const maps = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let result = [...maps[digits[0]]];
  for (let i = 1; i < digits.length; i += 1) {
    let nextResult = [];
    maps[digits[i]].forEach(p => {
      nextResult = [...nextResult, ...result.map(q => q + p)];
    });
    result = nextResult;
  }
  return result;
}

console.log(letterCombinations('23'));
