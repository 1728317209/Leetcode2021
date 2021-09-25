// 有一座高度是10级台阶的楼梯，从下往上走，每跨一步只能向上1级或者2级台阶。要求用程序来求出一共有多少种走法？

const map = new Map();

function climbStairWays(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (!map.has(n)) {
    map.set(n, climbStairWays(n - 1) + climbStairWays(n - 2));
  }
  return map.get(n);
}

console.log(climbStairWays(10));
