/**
 * Problem: 2635. Apply Transform Over Each Element in Array
 * Difficulty: Easy
 * Topic: Arrays / Simulation
 *
 * Approach:
 * - Iterate through the input array.
 * - Apply the provided function `fn` to each element along with its index.
 * - Push the result into a new array.
 * - Return the new array.
 *
 * Note: This solution avoids using the built-in Array.map method.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

// Examples:
map([1, 2, 3], n => n + 1);          // [2, 3, 4]
map([1, 2, 3], (n, i) => n + i);     // [1, 3, 5]
map([10, 20, 30], () => 42);         // [42, 42, 42]
