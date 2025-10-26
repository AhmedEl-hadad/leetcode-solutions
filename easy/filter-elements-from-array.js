/**
 * Problem: 2634. Filter Elements from Array
 * Difficulty: Easy
 * Topic: Arrays / Simulation
 *
 * Approach:
 * - Iterate through the input array.
 * - Apply the provided function `fn` to each element and its index.
 * - If `fn` returns a truthy value, include the element in the result array.
 * - Return the filtered array.
 *
 * Note: This solution avoids using the built-in Array.filter method.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};

// Examples:
filter([0, 10, 20, 30], n => n > 10);        // [20, 30]
filter([1, 2, 3], (n, i) => i === 0);        // [1]
filter([5, 10, 15], (n) => n % 10 === 0);    // [10]
