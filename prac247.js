const a = [10, 5, 2, 7, 1, 25, 6, 7, 15,1];
let k = 40;
const longestSubArray = (a, k) => {
  let currSum = a[0];
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let subArray = [];
  for (let i = 1; i < a.length; i++) {
    currSum+=a[i];
    while (currSum > k && start < i - 1) {
      currSum -= a[start];
      start++;
    }
    if (currSum === k) {
      end = i;
      
      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
        subArray = [start, end];
      }
    }
    // console.log("i",i)
    // if (i < a.length) {
    //   currSum += a[i];
    // }
   
  }
  console.log(maxLength);
  console.log(subArray);
};

longestSubArray(a, k);
