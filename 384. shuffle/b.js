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
  let len = this.nums.length;
  while (len > 0) {
    const index = this.random(len);
    const temp = this.nums[index];
    this.nums[index] = this.nums[len - 1];
    this.nums[len - 1] = temp;
    len -= 1;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
