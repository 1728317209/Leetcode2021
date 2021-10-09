/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let result = 0;
  const set = new Set();
  let rk = -1;
  // i 每次向后移动一位，set 中是 以 i 开头的不重复的 substring
  for (let i = 0; i < s.length; i += 1) {
    while (rk + 1 < s.length && !set.has(s[rk + 1])) {
      set.add(s[rk + 1]);
      rk += 1;
    }
    result = Math.max(result, rk + 1 - i);
    set.delete(s[i]); // 每轮结束 s[i]
  }
  return result;
}
