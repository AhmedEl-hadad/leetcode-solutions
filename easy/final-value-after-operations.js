/**
 * Problem: 2011. Final Value of Variable After Performing Operations
 * Difficulty: Easy
 * Topic: Arrays / Simulation
 *
 * Approach:
 * - Start with X = 0.
 * - Iterate over the operations array.
 * - Increment X for "++X" or "X++".
 * - Decrement X for "--X" or "X--".
 * - Return final value of X.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0;

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === "++X" || op === "X++") {
      X++;
    } else if (op === "--X" || op === "X--") {
      X--;
    }
  }

  return X;
};

// Examples:
finalValueAfterOperations(["--X", "X++", "X++"]); // 1
finalValueAfterOperations(["++X", "++X", "X++"]); // 3
finalValueAfterOperations(["X++", "++X", "--X", "X--"]); // 0
