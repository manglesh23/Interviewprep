let a = [1, 2, -3, 4, -1, 5, -2, 6];

const getMaxSum = (a) => {
  let sum = 0;
  let currsum = 0;
  let left = 0;
  let end = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[i] + currsum) {
      currsum = a[i];
      left = i;
    } else {
      currsum += a[i];
    }
    if (currsum > sum) {
      sum = currsum;
      end = i;
    }
  }
  console.log(sum, left, end);
};
getMaxSum(a);
