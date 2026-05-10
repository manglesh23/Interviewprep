let a = [4, 2, 7, 6, 5, 0, 7, 1];
let k = 13;

const getSmallesArraySumK = (a, k) => {
  let sum = 0;
  let minlen = a.length;
  let left = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    while (sum > k && left <= i) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      if (minlen > i - left + 1) {
        minlen = i - left + 1;
        start = left;
        end = i;
      }
    }
  }
  console.log(minlen, a.slice(start, end + 1), start, end);
};
getSmallesArraySumK(a, k);
