/**
 * Problem: 2626. Array Reduce Transformation
 * Difficulty: Easy
 * Topic: Arrays / Simulation
 *
 * Approach:
 * - Start with the initial value `init`.
 * - Iterate through the array `nums`.
 * - Apply the reducer function `fn` to the current value and each array element sequentially.
 * - Update the accumulator with each step.
 * - Return the final accumulated value.
 *
 * Note: Avoids using the built-in Array.reduce method.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let val = init;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};

// Examples:
reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0);        // 10
reduce([2, 4, 6], (acc, curr) => acc * curr, 1);           // 48
reduce([], (acc, curr) => acc + curr, 5);                  // 5
