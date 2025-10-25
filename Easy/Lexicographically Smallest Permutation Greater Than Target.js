/**
 * Problem: Lexicographically Greater Permutation
 * Difficulty: Hard
 *
 * Description:
 * Given a string `s` and a target string `target`, return the lexicographically 
 * smallest permutation of `s` that is strictly greater than `target`. 
 * If no such permutation exists, return an empty string.
 *
 * Approach:
 * 1. Count the frequency of each character in `s`.
 * 2. Iterate from the rightmost position to the leftmost to try the first 
 *    strictly-greater change.
 * 3. For each position `i`:
 *    - Attempt to match the prefix `target[0..i-1]`.
 *    - Try to place the smallest character greater than `target[i]` at position `i`.
 *    - Build the rest of the string with remaining characters in lexicographical order.
 * 4. If no such permutation exists, return "".
 *
 * Time Complexity: O(26 * n) ≈ O(n)
 * Space Complexity: O(26) ≈ O(1) + O(n) for building result string
 *
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const n = s.length;
    const freqOrig = new Array(26).fill(0);
    
    for (const ch of s) freqOrig[ch.charCodeAt(0) - 97]++;

    function buildSmallestFromFreq(freq) {
        let res = '';
        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0) res += String.fromCharCode(97 + i).repeat(freq[i]);
        }
        return res;
    }

    for (let i = n - 1; i >= 0; i--) {
        const freq = freqOrig.slice();
        let ok = true;

        // try to match prefix target[0..i-1]
        for (let j = 0; j < i; j++) {
            const idx = target.charCodeAt(j) - 97;
            if (freq[idx] > 0) {
                freq[idx]--;
            } else {
                ok = false;
                break;
            }
        }
        if (!ok) continue;

        const curIdx = target.charCodeAt(i) - 97;

        // pick the smallest letter > target[i] at position i
        for (let cand = curIdx + 1; cand < 26; cand++) {
            if (freq[cand] > 0) {
                freq[cand]--;
                const prefix = target.slice(0, i);
                const rest = buildSmallestFromFreq(freq);
                return prefix + String.fromCharCode(97 + cand) + rest;
            }
        }
        // cannot pick greater letter here → try earlier position
    }

    return '';
};
