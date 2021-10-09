const map = new Map();
function climbStairs(n) {
  if (!map.has(n)) {
    let val;
    if (n === 1) {
      val = 1;
    } else if (n === 2) {
      val = 2;
    } else {
      val = climbStairs(n - 1) + climbStairs(n - 2);
    }
    map.set(n, val);
  }
  return map.get(n);
}
