/**
 * @param {number[]} nums
 */
function Solution(nums) {
  this.originalNums = [...nums];
  this.nums = nums;
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.originalNums.forEach((value, index) => {
    this.nums[index] = value;
  });
  return this.nums;
};

Solution.prototype.random = function (max = 1) {
  return Math.floor(Math.random() * max);
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = [...this.nums];
  while (nums.length) {
    const index = this.random(nums.length);
    this.nums[nums.length - 1] = nums[index];
    nums.splice(index, 1);
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
