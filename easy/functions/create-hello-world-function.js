/**
 * Problem: 2667. Create Hello World Function
 * Difficulty: Easy
 * Topic: Functions / Closures
 *
 * Approach:
 * - Return a new function that ignores any input arguments.
 * - The returned function always returns "Hello World".
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @return {function(...any): string}
 */
function createHelloWorld() {
  return function(...args) {
    return "Hello World";
  };
}

// Examples:
const f = createHelloWorld();
f();                // "Hello World"
f({}, null, 42);    // "Hello World"
