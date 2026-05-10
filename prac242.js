const a = [10, 5, 2, 7, 1, 5, 3, 2, 1, 5];

const subArraySum = (a, k) => {
  let currentSum = a[0];
  let start = 0;
  let end = 0;
  for (let i = 1; i < a.length; i++) {
    currentSum += a[i];
    while (currentSum > k && start < i - 1) {
      currentSum -= a[start];
      start++;
    }
    if (currentSum === k) {
      end = i;
      // console.log(i);
      console.log(currentSum);
      break;
    }
   
  }
  console.log(start, end);
};

subArraySum(a, 23);
