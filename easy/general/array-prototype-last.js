// easy/general/array-prototype-last.js

/**
 * 2619. Array Prototype Last — Easy (LeetCode)
 *
 * The goal is to add a `.last()` method to *all* arrays.
 * This method returns the last element of the array.
 * If the array is empty → return -1.
 *
 * Notes:
 * - Accessing Array.prototype affects all arrays, which is intended here.
 * - No need for extra variables or conditions beyond checking length.
 */

Array.prototype.last = function () {
  // If no elements exist, return -1
  if (this.length === 0) return -1;

  // Otherwise return last element
  return this[this.length - 1];
};

module.exports = {}; // No export needed for LeetCode, included for repo consistency
