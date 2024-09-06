const a = [1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;
const first = (a, k) => {
  let l = 0;
  let r = a.length - 1;
  let firstp = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (a[mid] === k) {
      firstp = mid;
      r = mid - 1;
    } else if (a[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  console.log("frist:-",firstp);
};

const last = (a, k) => {
  let low = 0;
  let high = a.length - 1;
  let lastposition = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (a[mid] === k) {
      lastposition = mid;
      low = mid + 1;
    } else if (a[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log("last position:-", lastposition);
};

first(a, k);
last(a, k);
