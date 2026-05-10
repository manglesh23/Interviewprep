function findEqualSumSubarrays(arr) {
    let sumMap = new Map(); // Store sum -> [start, end] index pairs
    let result = [];

    // Traverse all possible subarrays
    for (let i = 0; i < arr.length; i++) {
        let sum = 0; // Initialize sum for each subarray starting at index i

        for (let j = i; j < arr.length; j++) {
            sum += arr[j]; // Calculate the sum of subarray from i to j

            // If this sum is already in the map, we found two subarrays with the same sum
            if (sumMap.has(sum)) {
                let [prevStart, prevEnd] = sumMap.get(sum);
                result.push([[prevStart, prevEnd], [i, j]]);

                // Return early if we found two subarrays
                if (result.length === 2) {
                    return result;
                }
            } else {
                // Store the sum with the current subarray indices
                sumMap.set(sum, [i, j]);
            }
        }
    }

    // Return the result (either the found subarrays or a message if none found)
    return result.length ? result : "No two subarrays with equal sum found";
}

// Example usage
let arr = [1, 2, 3, 2, 6, 2];
console.log(findEqualSumSubarrays(arr));
