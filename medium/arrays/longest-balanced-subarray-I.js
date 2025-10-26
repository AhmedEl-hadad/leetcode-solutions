// medium/arrays/longest-balanced-subarray-I.js

/**
 * 3719. Longest Balanced Subarray I — Medium (LeetCode)
 *
 * A subarray is called *balanced* if:
 *   #distinct_even_numbers == #distinct_odd_numbers
 *
 * Approach (Brute Force with Sets):
 * - For every starting index i, we expand j forward.
 * - Maintain two sets:
 *     evenSet → distinct even numbers so far
 *     oddSet  → distinct odd numbers so far
 * - Each step, add nums[j] to the correct set based on parity.
 * - If sizes match → update max length.
 *
 * Complexity:
 *   Time  : O(n²)
 *   Space : O(n) (worst case distinct elements in sets)
 *
 * Works for n ≤ ~2000 efficiently. For larger constraints, see Hard version (Segment Tree / Balance Tracking).
 */

var longestBalanced = function(nums) {
  const n = nums.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    const evenSet = new Set();
    const oddSet = new Set();

    for (let j = i; j < n; j++) {
      const num = nums[j];

      // Track distinct numbers based on parity
      if (num % 2 === 0) {
        evenSet.add(num);
      } else {
        oddSet.add(num);
      }

      // Check balance condition
      if (evenSet.size === oddSet.size) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
};

module.exports = longestBalanced;
