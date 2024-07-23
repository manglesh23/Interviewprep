let a = [1, 3, 4, 6, 7, 8];
let b = [2, 3, 4, 5, 9, 10];
let k = 5;
const findkth = (a, b, k) => {
  let i = 0;
  let j = 0;
  let p = 0;
  let res = -1;
  while (i < a.length && j < b.length && p<k-1) {
    if (a[i] < b[j]) {
      res = a[i];
      i++;
      p++;
    } else if (a[i] > b[j]) {
      res = a[j];
      j++;
      p++;
    } else {
      i++;
      j++;
      p++;
    }
  }
  console.log(res);
};

findkth(a, b, k);
