/**
 * Problem: Implement Custom Reduce Function
 * Difficulty: Easy
 *
 * Description:
 * Implement a function `reduce` that takes an array `nums`, a callback function `fn`,
 * and an initial value `init`. It returns a single value obtained by applying `fn`
 * sequentially to each element of `nums`, using the return value from the previous
 * calculation as the accumulator.
 *
 * Approach:
 * - Initialize `val` to the initial value `init`.
 * - Iterate over the array `nums`:
 *      - Update `val = fn(val, nums[i], i, nums)` for each element.
 * - Return `val` after the loop.
 *
 * Example:
 * reduce([1,2,3,4], (acc, n) => acc + n, 0); // returns 10
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - input array
 * @param {Function} fn - reducer function
 * @param {number} init - initial accumulator value
 * @return {number} - final accumulated value
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i], i, nums);
    }
    return val;
};
