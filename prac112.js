let a = [-4, -1, 0, 2, 3, 9];

const squreeach = (a) => {
  let j = a.length - 1;
  let i = 0;
  let pos = a.length - 1;
  let b=[];
  while (i <= j) {
    if (Math.abs(a[i]) > Math.abs(a[j])) {
      b[pos] = a[i] * a[i];

      i++;
    } else {
      b[pos] = a[j] * a[j];
      j--;
    }
    pos--;
  }

  console.log(a);
  console.log(b);
};

squreeach(a);
