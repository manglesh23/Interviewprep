const a = [0, 1, -1, 2, 4, 5, 6, -3, -4,3];

const missingPositive = (a) => {
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      [a[i], a[j]] = [a[j], a[i]];
      j++;
    }
  }
  console.log(a);
//   console.log(a.slice(0, j));
  for (let i = 0; i < j; i++) {
    let val = Math.abs(a[i]);
    if (val - 1 < j && a[val - 1] > 0) {
      a[val - 1] = -a[val - 1];
    }
  }
  for (let i = 0; i < j; i++) {
    if (a[i] > 0) {
      console.log(i + 1);
      return;
    }
  }
  console.log(j+1);
};
missingPositive(a);
