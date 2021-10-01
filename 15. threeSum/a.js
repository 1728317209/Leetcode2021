/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums = nums.sort();
  const resultList = [];

  function isValid(result) {
    if (resultList.length === 0) {
      return true;
    }
    const preResult = resultList[resultList.length - 1];
    return preResult.some((item, index) => item !== result[index]);
  }

  for (let i = 0; i < nums.length - 2; i += 1) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j += 1;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k -= 1;
      } else {
        if (isValid([nums[i], nums[j], nums[k]])) {
          resultList.push([nums[i], nums[j], nums[k]]);
        }
        j += 1;
        k -= 1;
      }
    }
  }

  return resultList;
}

console.log(threeSum([0, 0, 0, 0]));
