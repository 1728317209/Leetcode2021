/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let count;
  const nums = [0];
  for (let i = 1; i <= n; i += 1) {
    if (i === 1) {
      nums[i] = 1;
    } else if (i === 2) {
      nums[i] = 2;
    } else {
      nums[i] = nums[i - 1] + nums[i - 2];
    }
    count = nums[i];
  }
  console.log('climbStairs -> nums', nums);
  return count;
}

console.log(climbStairs(3));
