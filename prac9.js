const a = [1, 2, 2, 3, 4, 5, 6, 7];

const missing = (a) => {
  for (let i = 0; i < a.length; i++) {
    let val = Math.abs(a[i]);
    a[val-1] = -a[val-1];
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      console.log(a[i]);
    }
  }
};

missing(a);
