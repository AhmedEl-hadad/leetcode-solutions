/**
 * Problem: Implement Custom Map Function
 * Difficulty: Easy
 *
 * Description:
 * Implement a function `map` that takes an array `arr` and a callback function `fn`.
 * It should return a new array where each element is the result of calling `fn` 
 * on the corresponding element of `arr`.
 *
 * Approach:
 * - Initialize an empty array `result`.
 * - Iterate over `arr` using a for-loop.
 * - For each element, call `fn(element, index)` and push the result into `result`.
 * - Return the `result` array.
 *
 * Example:
 * map([1,2,3], (x,i) => x*2); // returns [2,4,6]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the result array
 *
 * @param {number[]} arr - input array
 * @param {Function} fn - callback function
 * @return {number[]} - new array with mapped values
 */
var map = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};
