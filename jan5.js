let a = [1, 3, 4, 6];
let b = [2, 4, 6, 7, 8];
let c = [1, 4, 6, 9, 8];

const commonEle = (a, b, c) => {
  let common = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) {
      common.push(a[i]);
      i++;
      j++;
      k++;
    } else if (a[i] < b[j]) {
      i++;
    } else if (b[j] < c[k]) {
      j++;
    } else {
      k++;
    }
  }
  console.log(common);
};
commonEle(a,b,c);
