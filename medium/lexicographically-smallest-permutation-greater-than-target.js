// medium/strings/lexicographically-smallest-permutation-greater-than-target.js

/**
 * 3720. Lexicographically Smallest Permutation Greater Than Target — Medium (LeetCode)
 *
 * Given two equal-length strings `s` and `target`:
 * We want the *smallest permutation of s* that is *strictly greater* than `target`,
 * lexicographically.
 *
 * Key Idea:
 * - We try to match the prefix of `target` exactly.
 * - At some position i, instead of placing `target[i]`, we place the smallest character
 *   that is *strictly greater* than target[i] and still available in the frequency count of `s`.
 * - After choosing that greater character, we fill the remainder of the string with the
 *   lexicographically smallest possible sequence from the remaining characters.
 *
 * This approach ensures:
 * - The result is > target (guaranteed by choosing a greater character at position i).
 * - It is the smallest such result (because we try positions from right → left,
 *   and choose the smallest greater character available).
 *
 * Time Complexity: O(26 * n) ≈ O(n)
 * Space Complexity: O(26) = O(1)
 */

var lexGreaterPermutation = function(s, target) {
  const n = s.length;

  // Frequency of characters in s
  const freqOrig = new Array(26).fill(0);
  for (const ch of s) {
    freqOrig[ch.charCodeAt(0) - 97]++;
  }

  // Build lexicographically smallest string from remaining frequencies
  function buildSmallestFromFreq(freq) {
    let res = '';
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0) {
        res += String.fromCharCode(97 + i).repeat(freq[i]);
      }
    }
    return res;
  }

  // Try breaking the match at position i
  for (let i = n - 1; i >= 0; i--) {
    const freq = freqOrig.slice();
    let validPrefix = true;

    // Try matching prefix target[0..i-1]
    for (let j = 0; j < i; j++) {
      const idx = target.charCodeAt(j) - 97;
      if (freq[idx] > 0) {
        freq[idx]--;
      } else {
        validPrefix = false;
        break;
      }
    }

    if (!validPrefix) continue;

    const curIdx = target.charCodeAt(i) - 97;

    // Try placing a *strictly greater* character at position i
    for (let cand = curIdx + 1; cand < 26; cand++) {
      if (freq[cand] > 0) {
        freq[cand]--;

        const prefix = target.slice(0, i);
        const remainder = buildSmallestFromFreq(freq);

        return prefix + String.fromCharCode(97 + cand) + remainder;
      }
    }

    // If we cannot place a greater character, try earlier position
  }

  // No valid permutation exists
  return '';
};

module.exports = lexGreaterPermutation;
