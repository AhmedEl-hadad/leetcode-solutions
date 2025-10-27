/**
 * Problem: 2666. Allow One Function Call
 * Difficulty: Easy
 * Topic: Closures / Higher-Order Functions
 *
 * Approach:
 * - Use a closure to persist state between function calls.
 * - Keep a boolean flag `called` to track whether the function has executed before.
 * - On the first call: execute `fn` with the provided arguments and store the result.
 * - On subsequent calls: return undefined without calling `fn` again.
 *
 * Why Closure?
 * - The returned function retains access to variables defined in `once` (like `called`),
 *   even after `once` has finished execution. This allows us to remember state across calls.
 *
 * Time Complexity: O(1) per call
 * Space Complexity: O(1)
 */

var once = function(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      result = fn(...args);
      called = true;
      return result;
    }
    return undefined;
  };
};

/**
 * Example Usage:
 * const fn = (a,b,c) => (a + b + c);
 * const onceFn = once(fn);
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // undefined
 */
