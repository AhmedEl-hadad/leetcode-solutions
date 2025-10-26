/**
 * Problem: 2629. Function Composition
 * Difficulty: Easy
 * Topic: Functions / Closures
 *
 * Approach:
 * - Return a new function that applies the given functions from right to left.
 * - If the array is empty, the returned function is the identity function (returns x).
 * - Iteratively apply each function to the result starting from the last function.
 *
 * Time Complexity: O(n)
 *   n = number of functions in the array
 * Space Complexity: O(1)
 */

/**
 * @param {Function[]} functions - Array of functions [f1, f2, ..., fn]
 * @return {Function} - Composed function
 */
var compose = function(functions) {
  return function(x) {
    let res = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      res = functions[i](res);
    }
    return res;
  };
};

// Example usage:
const fn1 = compose([x => x + 1, x => 2 * x]);
fn1(4);  // 9

const fn2 = compose([x => x + 1, x => x * x, x => 2 * x]);
fn2(4);  // 65
