let a = [4, 3, 2, 5, 6, 1, 7];

const subArraySum = (a) => {
  let sum = 0;
  let k = 10;
  let left = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    while (sum > k) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      console.log(left, i);
    }
  }
};

subArraySum(a);
