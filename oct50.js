let a = [1, 3, 2, 5, 4, 7, 8, 6];

let k = 11;

const getSUbarraySum = (a, k) => {
  let sum = 0;
  let left = 0;
  let minLength = a.length;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    while (sum > k && left <= i) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      console.log(sum, left, i);
      minLength = Math.min(minLength, i - left + 1);
    }
  }
  console.log("Min:-", minLength);
};
getSUbarraySum(a, k);
