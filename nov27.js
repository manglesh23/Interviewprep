let a = [1, 2, 3, 3, 4, 4, 5, 6];
let k = 6;

const getSubArray = (a, k) => {
  let set = new Set(a);
  console.log(set);
  for (let i = 0; i < a.length; i++) {
    let num = a[i] + 1;
    let count = 1;
    while (set.has(num)) {
      num++;
      count++;
      if (count === k) {
        return true;
      }
    }
  }
  return false
};

console.log(getSubArray(a, k));
