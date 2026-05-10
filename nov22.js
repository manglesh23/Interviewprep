let a = [23, 2, 4, 6, 7];
let k = 6;

const getSumArraySumK = (a, k) => {
  let map = new Map();
  let prefix = 0;
  map.set(0, -1);
  for (let i = 0; i < a.length; i++) {
    prefix += a[i];
    let mod = prefix % k;
    if (map.has(mod)) {
      if (i - map.get(mod) >= 2) {
        console.log(map.get(mod) + 1, i);
        return true;
      }
    } else {
      map.set(mod, i);
    }
  }
  return false;
};
console.log(getSumArraySumK(a, k));
