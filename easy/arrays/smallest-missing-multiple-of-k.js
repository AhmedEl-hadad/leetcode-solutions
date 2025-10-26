/**
 * Problem: 3718. Smallest Missing Multiple of K
 * Difficulty: Easy
 * Topic: Arrays / HashSet
 *
 * Approach:
 * - Store all numbers from nums in a Set for O(1) lookups.
 * - Start from the first positive multiple of k (i.e., k).
 * - Increment by k each time and check if the multiple exists in the set.
 * - The first multiple not in the set is the answer.
 *
 * Time Complexity: O(n + m)
 *   n = length of nums
 *   m = number of multiples checked (until missing one is found)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
  const set = new Set(nums);
  let multiple = k;

  while (true) {
    if (!set.has(multiple)) return multiple;
    multiple += k;
  }
};

// Examples:
missingMultiple([8, 2, 3, 4, 6], 2);      // 10
missingMultiple([1, 4, 7, 10, 15], 5);    // 5
missingMultiple([3, 6, 9], 3);            // 12
missingMultiple([5, 10, 15, 20, 25], 5);  // 30
missingMultiple([2, 4, 6, 8, 10], 1);     // 1
