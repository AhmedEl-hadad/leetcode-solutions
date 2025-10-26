/**
 * Problem: 2703. Return Length of Arguments Passed
 * Difficulty: Easy
 * Topic: Functions / Rest Parameters
 *
 * Approach:
 * - Use JavaScript rest parameters (`...args`) to collect all arguments into an array.
 * - Return the length of the array to count how many arguments were passed.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(n) where n = number of arguments
 */

/**
 * @param {...any} args - Any number of arguments of any type
 * @return {number} - Number of arguments passed
 */
var argumentsLength = function(...args) {
  return args.length;
};

// Examples:
argumentsLength(5);                     // 1
argumentsLength({}, null, "3");         // 3
argumentsLength(1, 2, 3);               // 3
