var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const set = new Set();
  const len = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1;
  let ans = 0;
  for (let i = 0; i < len; i += 1) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      set.delete(s.charAt(i - 1));
    }
    while (rk + 1 < len && !set.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      set.add(s.charAt(rk + 1));
      rk += 1;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
