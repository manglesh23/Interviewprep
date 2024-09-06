const a = [1, 2, 3, 4, 5, 6, 7];

const binarysearch = (a, target) => {
  let r = a.length - 1;
  let l = 0;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (a[mid] === target) {
      return mid;
    } else if (a[mid] > target) {
      r--;
    } else {
      l++;
    }
  }
};

console.log(binarysearch(a,5));
