/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
// var findMissingRanges = function(nums, lower, upper) {
//   const result = [];
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] > lower && nums[i] < upper) {
//       let val = '';
//       for (let j = i + 1; j < nums.length; j += 1) {
//         if (nums[j] - nums[i] === 2) {
//           val = `${(nums[i] + nums[j]) / 2}`;
//         }
//         if (nums[j] - nums[i] > 2) {
//           val = `${nums[i] + 1}->${nums[j] - 1}`;
//         }
//       }
//       result.push(val);
//     }
//   }
// };

const findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0) {
    return lower === upper ? `${lower}` : `${lower}->${upper}`;
  }
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    let left;
    let right;
    if (i === 0 && nums[i] > lower) {
      left = lower;
      right = nums[0] - 1;
    }
    if (i === nums.length - 1 && nums[i] < upper) {
      left = nums[i] + 1;
      right = upper;
    }
    if (i >= 0 && i < nums.length - 1 && nums[i] > lower && nums[i] < upper) {
      left = nums[i] + 1;
      right = Math.min(nums[i + 1] - 1, upper);
    }
    if (left !== undefined) {
      if (left === right) {
        result.push(`${left}`);
      } else {
        result.push(`${left}->${right}`);
      }
    }
  }
  return result;
};
