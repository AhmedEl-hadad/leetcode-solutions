/**
 * Problem: Longest Balanced Subarray
 * Difficulty: Hard
 * LeetCode Link: [Insert link if available]
 *
 * Description:
 * Given an integer array `nums`, a subarray is balanced if the number of distinct
 * even numbers equals the number of distinct odd numbers. This function returns
 * the length of the longest balanced subarray using an optimized segment-tree approach.
 *
 * Approach:
 * 1. Use a segment tree to track the difference between counts of distinct even
 *    and odd numbers in subarrays.
 * 2. Maintain the last occurrence of each number to properly update the difference
 *    only for the current subarray range.
 * 3. For each index r, update the segment tree with +1 if the number is even, -1 if odd.
 * 4. Query the leftmost index l where the difference is zero to find the longest balanced subarray ending at r.
 *
 * Time Complexity: O(n log n), due to segment tree updates and queries.
 * Space Complexity: O(n), for segment tree arrays and lastIndex map.
 */

var longestBalanced = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;

    const size = 4 * n;
    const segMin = new Array(size).fill(0);
    const segMax = new Array(size).fill(0);
    const lazy = new Array(size).fill(0);

    function apply(node, val) {
        segMin[node] += val;
        segMax[node] += val;
        lazy[node] += val;
    }

    function push(node) {
        if (lazy[node] !== 0) {
            apply(node * 2, lazy[node]);
            apply(node * 2 + 1, lazy[node]);
            lazy[node] = 0;
        }
    }

    function pull(node) {
        segMin[node] = Math.min(segMin[node * 2], segMin[node * 2 + 1]);
        segMax[node] = Math.max(segMax[node * 2], segMax[node * 2 + 1]);
    }

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

    function findLeftmostZero(node, l, r, ql, qr) {
        if (ql > r || qr < l) return -1;
        if (segMax[node] < 0 || segMin[node] > 0) return -1;
        if (l === r) return segMin[node] === 0 ? l : -1;
        push(node);
        const mid = (l + r) >> 1;
        const leftRes = findLeftmostZero(node * 2, l, mid, ql, qr);
        if (leftRes !== -1) return leftRes;
        return findLeftmostZero(node * 2 + 1, mid + 1, r, ql, qr);
    }

    const lastIndex = new Map(); // last occurrence index for each value
    let ans = 0;

    for (let r = 0; r < n; r++) {
        const val = nums[r];
        const prev = lastIndex.has(val) ? lastIndex.get(val) : -1;
        lastIndex.set(val, r);

        const L = prev + 1;
        const R = r;
        const add = (val % 2 === 0) ? 1 : -1;
        if (L <= R) update(1, 0, n - 1, L, R, add);

        const lidx = findLeftmostZero(1, 0, n - 1, 0, r);
        if (lidx !== -1) ans = Math.max(ans, r - lidx + 1);
    }

    return ans;
};
