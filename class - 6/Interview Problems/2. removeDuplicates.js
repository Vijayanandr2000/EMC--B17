/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let res = [];

  res[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let prev = res[res.length - 1];
    let curr = nums[i];

    if (curr !== prev) {
      res.push(curr);
    }
  }

  // // console.log("vijay1", nums)
  for (let i = 0; i < res.length; i++) {
    nums[i] = res[i];
  }

  nums.splice(res.length);

  // console.log("vijay2", nums)
};
