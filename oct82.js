let a = [-1, -2, 4, 3 ,- 6, 5, 7, -8];

const maxSum = (a) => {
  let maxSum = a[0];
  let currsum = a[0];
  let left = 0;
  let end = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > currsum + a[i]) {
      currsum = a[i];
      left = i;
    } else {
      currsum += a[i];
    }

    if (currsum > maxSum) {
      maxSum = currsum;
      end = i;
    //   console.log("end:-",i);
    }
  }
  console.log(maxSum, left, end);
};

maxSum(a);
