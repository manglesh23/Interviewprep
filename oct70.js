const countSubarraysSumLessThanK = (a, k) => {
  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < a.length; right++) {
    sum += a[right];

    while (sum >= k && left <= right) {
      sum -= a[left];
      left++;
    }

    count += (right - left + 1);
  }

  return count;
};

let a = [1, 4, 3, 2, 1, 6, 5];
let k = 9;
console.log(countSubarraysSumLessThanK(a, k));
