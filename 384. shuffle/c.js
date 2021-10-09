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

Solution.prototype.random = function (min = 0, max = 1) {
  const len = max - min;
  return Math.floor(Math.random() * len) + min;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let i = 0;
  while (i < this.nums.length) {
    const random = this.random(i, this.nums.length);
    const temp = this.nums[random];
    this.nums[random] = this.nums[i];
    this.nums[i] = temp;
    i += 1;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
