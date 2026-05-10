const a = [12, -1, -7, 8, -15, 30, 16, 28];

const firstNegative = (a, k) => {
  let res = [];
  let queqe = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      queqe.push(i);
    }

    if (queqe.length > 0 && queqe[0] < i - k + 1) {
      queqe.shift();
    }

    if (i >= k - 1 && queqe.length > 0) {
      if (queqe.length > 0) {
        res.push(a[queqe[0]]);
      } else {
        res.push(0);
      }
    }
  }
  console.log(res);
};

firstNegative(a, 2);
