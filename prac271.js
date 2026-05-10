function maxSumSubarrayAtLeastK(arr, k) {
    const n = arr.length;

    // Step 1: Calculate maximum sum of any subarray of size K
    const maxSumK = Array(n).fill(0);
    let currentSum = 0;

    // Calculate sum of the first K elements
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSumK[k - 1] = currentSum;

    // Sliding window to get max sum for any subarray ending at i and of size exactly K
    for (let i = k; i < n; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSumK[i] = Math.max(maxSumK[i - 1], currentSum);
    }

    // Step 2: Calculate the result for subarrays with size >= K
    let maxSum = -Infinity;
    currentSum = 0;

    for (let i = 0; i < n; i++) {
        currentSum += arr[i];

        // If current subarray size is at least K
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, currentSum);
            maxSum = Math.max(maxSum, currentSum + (i >= k ? maxSumK[i - k] : 0));

            // Slide the window
            currentSum -= arr[i - (k - 1)];
        }
    }

    return maxSum;
}

console.log(maxSumSubarrayAtLeastK([1,2,3,-2,5],3))
