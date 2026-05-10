let a = [1, 0, 1, 0, 1, 0];
let k = 2;
const getCountSum = (a, k) => {
  let count = 0;
  let map = new Map();
  let sum = 0;
  map.set(0, 1);
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (map.get(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  console.log(count);
};
getCountSum(a, k);
