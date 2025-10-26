/**
 * Problem: 2620. Counter
 * Difficulty: Easy
 * Topic: Functions / Closures
 *
 * Approach:
 * - Use a closure to keep track of the current value.
 * - Each call returns the current value and increments it by 1.
 *
 * Time Complexity: O(1) per call
 * Space Complexity: O(1)
 */

/**
 * @param {number} n - The starting value of the counter
 * @return {function(): number} - Counter function
 */
var createCounter = function(n) {
  return function() {
    return n++;
  };
};

// Example Usage:
const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
