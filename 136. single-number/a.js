/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const record = {};
  nums.forEach(num => {
    if (!record[num]) {
      record[num] = true;
    } else {
      delete record[num];
    }
  });
  console.log('record', record);
  return Object.keys(record)[0];
}

console.log(singleNumber([4, 1, 2, 1, 2]));
