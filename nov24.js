let a = [1, 2, 3];
let k = 1;

const getSubArraySumK = (a, k) => {
  let sum = 0;
  let left = 0;
  let count = 0;
  let res = [];
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    while (sum > k) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      count++;
      res.push([left, i]);
    }
  }
  console.log(res, count);
};
getSubArraySumK(a, k);
