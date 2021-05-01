// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let len = 0;
  let list = []; // 保存当前正在找的字符串
  for (let i = 0; i < s.length; i++) {
    if (!list.includes(s[i])) {
      list.push(s[i]);
    } else {
      len = Math.max(len, list.length);
      list = [...list.slice(list.indexOf(s[i]) + 1), s[i]];
    }
  }
  return Math.max(len, list.length);
}

console.log(lengthOfLongestSubstring('abcabcbb'));
