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
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]);

  let i = 0;
  let sum = 0;
  while (i < s.length) {
    if (i === s.length - 1) {
      sum += map.get(`${s[i]}`);
      break;
    }
    if (i === s.length - 2 && map.has(`${s[i]}${s[i + 1]}`)) {
      sum += map.get(`${s[i]}${s[i + 1]}`);
      break;
    }

    if (map.has(`${s[i]}${s[i + 1]}`)) {
      sum += map.get(`${s[i]}${s[i + 1]}`);
      i += 2;
    } else if (map.has(`${s[i]}`)) {
      sum += map.get(`${s[i]}`);
      i += 1;
    } else {
      throw new Error(`${s[i]} is illegal`);
    }
  }
  return sum;
}

console.log(romanToInt('MCMXCIVII'));
