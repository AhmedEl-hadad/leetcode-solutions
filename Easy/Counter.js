/**
 * Problem: Create Counter Function
 * Difficulty: Easy
 *
 * Description:
 * Implement a function `createCounter` that takes an initial number `n` and
 * returns a counter function. Each time the counter function is called, it 
 * returns the current value of `n` and then increments it.
 *
 * Approach:
 * - Use a closure to preserve the value of `n` across multiple calls.
 * - The returned function increments `n` after returning its current value.
 *
 * Example:
 * const counter = createCounter(10);
 * counter(); // 10
 * counter(); // 11
 * counter(); // 12
 *
 * Time Complexity: O(1) per call
 * Space Complexity: O(1) (closure stores `n`)
 *
 * @param {number} n - initial counter value
 * @return {Function} - a counter function
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};
