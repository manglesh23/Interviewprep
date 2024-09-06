const a = [3, 2, 5, 4, 0, -1, 9];

const sortarray = (a) => {
  if (a.length <= 1) {
    return a;
  }
  let pivot = a[a.length - 1];
  left = [];
  right = [];
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      left.push(a[i]);
    } else {
      right.push(a[i]);
    }
  }

  return [...sortarray(left), pivot, ...sortarray(right)];
};
console.log(sortarray(a));
// console.log(a);
