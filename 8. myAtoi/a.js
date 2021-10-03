function isNumber(val) {
  const set = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  return set.has(val);
}

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  s = s.trim();

  if (s[0] !== '+' && s[0] !== '-' && !isNumber(s[0])) {
    return 0;
  }

  let result = s[0];
  for (let i = 1; i < s.length; i += 1) {
    if (!isNumber(s[i])) {
      break;
    }
    result += s[i];
  }

  if (result === '+' || result === '-') {
    result = 0;
  } else {
    result = Number(result);
  }

  const min = -(2 ** 31);
  const max = 2 ** 31 - 1;
  if (result < min) {
    result = min;
  } else if (result > max) {
    result = max;
  }

  return result;
}
