/**
 * Longest Balanced Subarray II
 * Hard — LeetCode
 *
 * A subarray is considered balanced if the number of *distinct even numbers*
 * equals the number of *distinct odd numbers* inside that subarray.
 *
 * Approach:
 * We track the distinct count balance across the array.
 * Whenever we encounter a new occurrence of a number, it changes balance:
 *   - If it's even → balance += 1
 *   - If it's odd  → balance -= 1
 *
 * We maintain this balance using a Segment Tree that supports:
 *   - Range increment updates (lazy propagation)
 *   - Query to find earliest index where balance becomes 0
 *
 * If balance at index `l` equals balance at index `r`, then the subarray [l..r] is balanced.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

var longestBalanced = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  // Segment Tree arrays
  const size = 4 * n;
  const segMin = new Array(size).fill(0);
  const segMax = new Array(size).fill(0);
  const lazy = new Array(size).fill(0);

  // Apply lazy update to node
  function apply(node, val) {
    segMin[node] += val;
    segMax[node] += val;
    lazy[node] += val;
  }

  // Push lazy updates to children
  function push(node) {
    if (lazy[node] !== 0) {
      apply(node * 2, lazy[node]);
      apply(node * 2 + 1, lazy[node]);
      lazy[node] = 0;
    }
  }

  // Update tree after children update
  function pull(node) {
    segMin[node] = Math.min(segMin[node * 2], segMin[node * 2 + 1]);
    segMax[node] = Math.max(segMax[node * 2], segMax[node * 2 + 1]);
  }

  // Range add: increment balance on interval [ql, qr]
  function update(node, l, r, ql, qr, val) {
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
      apply(node, val);
      return;
    }
    push(node);
    const mid = (l + r) >> 1;
    update(node * 2, l, mid, ql, qr, val);
    update(node * 2 + 1, mid + 1, r, ql, qr, val);
    pull(node);
  }

  // Find first index in [ql, qr] where balance == 0
  function findLeftmostZero(node, l, r, ql, qr) {
    if (ql > r || qr < l) return -1;
    if (segMax[node] < 0 || segMin[node] > 0) return -1;
    if (l === r) return segMin[node] === 0 ? l : -1;
    push(node);
    const mid = (l + r) >> 1;
    let left = findLeftmostZero(node * 2, l, mid, ql, qr);
    if (left !== -1) return left;
    return findLeftmostZero(node * 2 + 1, mid + 1, r, ql, qr);
  }

  const lastIndex = new Map(); // Track last occurrence of each number
  let ans = 0;

  for (let r = 0; r < n; r++) {
    const val = nums[r];
    const prev = lastIndex.has(val) ? lastIndex.get(val) : -1;
    lastIndex.set(val, r);

    // Update balance in range (prev, r]
    const L = prev + 1;
    const R = r;
    const add = (val % 2 === 0) ? 1 : -1;
    if (L <= R) update(1, 0, n - 1, L, R, add);

    // Find leftmost index where balance == 0
    const lidx = findLeftmostZero(1, 0, n - 1, 0, r);
    if (lidx !== -1) ans = Math.max(ans, r - lidx + 1);
  }

  return ans;
};
