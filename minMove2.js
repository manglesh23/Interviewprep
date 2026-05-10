function minMoves(nums) {
  const n = nums.length;
  const total = nums.reduce((sum, num) => sum + num, 0);

  // Check if it's possible to equalize
  if (total % n !== 0) {
    return -1;
  }

  const target = total / n;
  let moves = 0;

  for (let num of nums) {
    if (num > target) {
      moves += num - target;
    }
  }

  return moves;
}

// Test cases
console.log(minMoves([0, 2, 0])); // Output: -1 (not possible)
console.log(minMoves([1, 2, 3])); // Output: 2
console.log(minMoves([4, 1, 1])); // Output: 2
console.log(minMoves([10, 0, 0, 0])); // Output: 7


