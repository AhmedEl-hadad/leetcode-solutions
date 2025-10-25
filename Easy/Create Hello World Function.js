/**
 * Problem: Create Hello World Function
 * Difficulty: Easy
 *
 * Description:
 * Implement a higher-order function `createHelloWorld` that returns a function.
 * The returned function ignores its arguments and always returns the string
 * "Hello World".
 *
 * Approach:
 * - Return a function using the rest operator `(...args)` to accept any number
 *   of arguments.
 * - The inner function always returns "Hello World".
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @return {Function} - a function that returns "Hello World"
 */
function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    };
}
