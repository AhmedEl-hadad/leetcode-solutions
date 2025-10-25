/**
 * Problem: Longest Balanced Subarray
 * Difficulty: Medium / Hard
 *
 * Description:
 * A subarray is called balanced if the number of distinct even numbers 
 * equals the number of distinct odd numbers. 
 * This function returns the length of the longest balanced subarray.
 *
 * Approach:
 * 1. Iterate over all possible subarrays starting from index i.
 * 2. Use two Sets to track distinct even and odd numbers in the current subarray.
 * 3. For each subarray, if the number of distinct even and odd numbers is equal,
 *    update the maximum length found so far.
 *
 * Time Complexity: O(n^2) — two nested loops over the array.
 * Space Complexity: O(n) — for the two Sets in each iteration.
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    const n = nums.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        const evenSet = new Set();
        const oddSet = new Set();

        for (let j = i; j < n; j++) {
            const num = nums[j];
            
            if (num % 2 === 0) {
                evenSet.add(num);
            } else {
                oddSet.add(num);
            }

            if (evenSet.size === oddSet.size) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};
