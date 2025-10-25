/**
 * Problem: Implement Custom Filter Function
 * Difficulty: Easy
 *
 * Description:
 * Implement a function `filter` that takes an array `arr` and a callback function `fn`.
 * It should return a new array containing only the elements for which `fn(element, index, arr)` returns true.
 *
 * Approach:
 * - Initialize an empty array `result`.
 * - Iterate over `arr` using a for-loop.
 * - For each element, call `fn(element, index, arr)`:
 *      - If true, push the element into `result`.
 * - Return the `result` array.
 *
 * Example:
 * filter([0, 10, 20, 30], (n) => n > 10); // returns [20, 30]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the result array
 *
 * @param {number[]} arr - input array
 * @param {Function} fn - callback function
 * @return {number[]} - filtered array
 */
var filter = function(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};
