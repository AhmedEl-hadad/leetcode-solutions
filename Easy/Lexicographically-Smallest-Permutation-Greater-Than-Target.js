/**
 * Problem: Lexicographically Greater Permutation
 * Difficulty: Hard
 * LeetCode Link: [Insert link if available]
 *
 * Description:
 * Given a string `s` and a `target` string, find the **lexicographically
 * smallest permutation of `s` that is strictly greater than `target`**.
 * If no such permutation exists, return an empty string.
 *
 * Approach:
 * 1. Count the frequency of each character in `s`.
 * 2. Iterate from the **rightmost to leftmost position** to try making the first 
 *    strictly-greater character change.
 * 3. For each position `i`:
 *    - Check if the prefix `target[0..i-1]` can be formed with `s`'s letters.
 *    - Try to place the **smallest character greater than target[i]** at position i.
 *    - Build the rest of the string using the **remaining letters in lexicographical order**.
 * 4. If no such permutation exists for any position, return `""`.
 *
 * Time Complexity: O(26 * n) ≈ O(n), because for each position we iterate over
 * the 26 letters at most.
 * Space Complexity: O(26) ≈ O(1) for character frequency array + O(n) for string building.
 */

var lexGreaterPermutation = function(s, target) {
    const n = s.length;
    const freqOrig = new Array(26).fill(0);
    for (const ch of s) freqOrig[ch.charCodeAt(0) - 97]++;

    function buildSmallestFromFreq(freq) {
        let res = '';
        for (let t = 0; t < 26; t++) {
            if (freq[t] > 0) res += String.fromCharCode(97 + t).repeat(freq[t]);
        }
        return res;
    }

    // Try making the first strictly-greater change at position i,
    // starting from rightmost to leftmost to get smallest lexicographic result
    for (let i = n - 1; i >= 0; i--) {
        const freq = freqOrig.slice();
        let ok = true;

        // consume prefix target[0..i-1]
        for (let j = 0; j < i; j++) {
            const idx = target.charCodeAt(j) - 97;
            if (freq[idx] > 0) {
                freq[idx]--;
            } else {
                ok = false;
                break;
            }
        }
        if (!ok) continue; // can't form this prefix, try shorter suffix

        const curIdx = target.charCodeAt(i) - 97;

        // try smallest character strictly greater than target[i]
        for (let cand = curIdx + 1; cand < 26; cand++) {
            if (freq[cand] > 0) {
                // pick cand at position i
                freq[cand]--;
                const prefix = target.slice(0, i);
                const rest = buildSmallestFromFreq(freq);
                return prefix + String.fromCharCode(97 + cand) + rest;
            }
        }

        // cannot pick greater at i, try earlier position
    }

    // If no permutation > target exists
    return '';
};

// Example usage:
console.log(lexGreaterPermutation("abc", "bba"));   // "bca"
console.log(lexGreaterPermutation("leet", "code")); // "eelt"
console.log(lexGreaterPermutation("baba", "bbaa")); // ""
