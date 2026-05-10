let a = [4, 3, 2, 4];

const getTriangleCount = (a) => {
  let count = 0;
  a.sort((a, b) => a - b);

  for (let k = a.length - 1; k >= 2; k--) {
    let i = 0;
    let j = k - 1;
    while (i < j) {
      if (a[i] + a[j] > a[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }
  console.log(count);
};
getTriangleCount(a);
