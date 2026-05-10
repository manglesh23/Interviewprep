let a = [7, 3, 4, 7];
let k = 7;

const getSumEqual = (a, k) => {
  let sum = 0;
  let count = 0;

  let left = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    while (sum > k && left <= i) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      count++;
    }
  }
  console.log(count);
};
getSumEqual(a, k);
