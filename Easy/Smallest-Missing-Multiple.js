/**
 * Problem: Smallest Missing Multiple
 * Difficulty: Medium
 * LeetCode Link: [Insert link if available]
 *
 * Description:
 * Given an array of numbers `nums` and an integer `k`, this function finds the
 * smallest positive multiple of `k` that is NOT present in `nums`.
 *
 * Approach:
 * 1. Convert the input array to a Set for O(1) lookup.
 * 2. Start checking multiples of k (k, 2k, 3k, ...).
 * 3. Return the first multiple that does not exist in the set.
 *
 * Time Complexity: O(n + m), where n is the length of nums and m is the smallest missing multiple.
 * Space Complexity: O(n), for storing nums in a Set.
 */

var missingMultiple = function(nums, k) {
    const set = new Set(nums); // O(n) to build the set
    let multiple = k;           // start with the first multiple
    while (true) {
        if (!set.has(multiple)) return multiple; // return the first missing multiple
        multiple += k; // check the next multiple
    }
};

// Example usage:
missingMultiple([8,2,3,4,6], 2); // → 10
missingMultiple([1,4,7,10,15], 5); // → 5
