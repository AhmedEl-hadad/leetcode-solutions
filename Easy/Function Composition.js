/**
 * Problem: Function Composition
 * Difficulty: Medium
 *
 * Description:
 * Implement a function `compose` that takes an array of functions and returns a new function.
 * The returned function, when called with an argument `x`, applies the functions from right to left,
 * passing the result of each function to the next.
 *
 * Approach:
 * - Return a function that takes a single argument `x`.
 * - Initialize `res` as `x`.
 * - Iterate over the `functions` array from right to left:
 *      - Update `res = functions[i](res)`.
 * - Return the final `res`.
 *
 * Example:
 * const fn = compose([x => x + 1, x => x * 2]);
 * fn(5); // (5 * 2) + 1 = 11
 *
 * Time Complexity: O(n) per call, where n is the number of functions
 * Space Complexity: O(1)
 *
 * @param {Function[]} functions - array of functions to compose
 * @return {Function} - composed function
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
