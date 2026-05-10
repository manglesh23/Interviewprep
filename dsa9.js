const a = [1, 3, 4, 6, 7, 8, 3];
const k = 21;

const subArraySum = (a, k) => {
  let start = 0;
  let i = 0;
  let currentSum = 0;
  let firstIndex = 0;
  let lastIndex = 0;

  while (i < a.length) {
   
    if (currentSum < k) {
      currentSum += a[i];
      i++;
    }
    if (currentSum > k) {
      currentSum -= a[start];
      start++;
    }
    if (currentSum === k) {
        console.log(currentSum, start, i-1);
        lastIndex = i;
        return;
      }
  }
  //   console.log(currentSum)
};
subArraySum(a, k);
