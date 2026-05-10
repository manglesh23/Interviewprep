const a = [2, 0, 5, 2, 3, 2];

const sumOfSizeK = (a, k) => {
  let start = 0;
  let end = 0;
  let currsum = a[0];
  let minLength = a.length;
  let findArr = [];

  for (let i = 1; i < a.length; i++) {
    currsum += a[i];
    while (currsum >= k && start < i) {
        if (minLength > i - start + 1) {
            minLength = i - start + 1;
            findArr.push([start, i]);
          }
      currsum -= a[start];
      start++;
     
    }
    // if (currsum === k) {
    //   end = i;
    //   if (minLength > end - start + 1) {
    //     minLength = end - start + 1;
    //     findArr.push(start, end);
    //   }
    // }
  }

  console.log(minLength, findArr);

};

sumOfSizeK(a, 7);
