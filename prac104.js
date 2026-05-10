const a = [1, 33, 2, 6, 5, 4, 7];

const subarraysum = (a, target) => {
  let currsum = a[0];
  let start = 0;

  for (let i = 1; i <= a.length; i++) {
    // Shrink the window from the left if currsum exceeds the target
    while (currsum > target && start < i - 1) {
      currsum -= a[start];
      start++;
    }

    // Check if we've found the exact sum
    if (currsum === target) {
      console.log(`Subarray found between indices ${start} and ${i - 1}`);
      return;  // If you want only the first occurrence, you can exit here
    }

    // Expand the window by adding the next element
    if (i < a.length) {
      currsum += a[i];
    }
  }

  console.log("No subarray with the given sum found");
};

subarraysum(a, 16);
