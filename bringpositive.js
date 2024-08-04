const a = [-1, 0, -3, -5, 9, -6, 7, 2];

const bringpositive = (a) => {
  let l = 0;
  let r = a.length - 1;
  let positive = 0;
  while (l < r) {
    while (a[l] > 0 && l < r) {
      l++;
      positive++;
    }
    while (a[r] < 0 && l < r) r--;

    if (l < r) {
      [a[l], a[r]] = [a[r], a[l]];
      l++;
      r--;
      positive++;
    }
  }
  console.log(a, positive);

  for (let i = 0; i <= positive; i++) {
    let val = a[i];
    if (val - 1 < positive && a[val - 1] > 0) {
      a[val - 1] = -a[val - 1];
    }
  }
  for (let i = 0; i <= positive; i++) {
    if (a[i] > 0) {
      console.log(i + 1);
      return;
    }
  }
};

bringpositive(a);
