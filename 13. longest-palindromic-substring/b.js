// https://leetcode-cn.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {string}
 */
function romanToInt(s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let sum = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (i !== s.length - 1 && map.get(s[i]) < map.get(s[i + 1])) {
      sum -= map.get(s[i]);
    } else {
      sum += map.get(s[i]);
    }
  }
  return sum;
}

console.log(romanToInt('MCMXCIVII'));
