let a = [3, 1, 4, 1, 5];
let k = 2;

const getKdiffpair = (a, k) => {
  a.sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let res = new Set();
  while (right < a.length) {
    if (left === right || a[right] - a[left] < k) {
      right++;
    } else if (a[right] - a[left] > k) {
      left++;
    } else {
      res.add(`${a[left]}, ${a[right]}`);
      left++;
      right++;
    }
  }
  console.log(res);
  for (let pair of res) {
    console.log(pair);
  }
};
getKdiffpair(a, k);
