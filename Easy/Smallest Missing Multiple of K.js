/**
 * Problem: Missing Multiple
 * Difficulty: Easy / Medium (depends on constraints)
 * 
 * Description:
 * Given an integer array `nums` and an integer `k`, find the smallest positive 
 * multiple of `k` that does not appear in `nums`.
 *
 * Approach:
 * - Convert `nums` into a Set for O(1) existence checks.
 * - Start from `k`, check if it's in the set:
 *      - If not, return it.
 *      - If yes, move to the next multiple (`multiple += k`) and repeat.
 * 
 * Time Complexity: O(n + result/k)
 * Space Complexity: O(n), due to the Set.
 *
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
