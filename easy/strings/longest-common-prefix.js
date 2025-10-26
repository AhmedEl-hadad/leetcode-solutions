/**
 * Problem: 14. Longest Common Prefix
 * Difficulty: Easy
 * Topic: Strings
 *
 * Approach:
 * - Assume the first string is the initial prefix.
 * - Iterate through the rest of the array:
 *   * While the current string does not start with the prefix,
 *     reduce the prefix by removing the last character each time.
 * - If the prefix becomes empty, return "" immediately.
 *
 * Time Complexity: O(n * m)
 *  n = number of strings
 *  m = length of the shortest string
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

// Examples:
longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
longestCommonPrefix(["dog", "racecar", "car"]); // ""
longestCommonPrefix(["reflower", "flow", "flight"]); // ""
