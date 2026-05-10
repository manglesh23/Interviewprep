const a = [1, 1, 2, 1, 3, 4, 3, 5, 6, 7];
let k = 4;

const duplicate = (a, k) => {
  let map = new Map();
  let start = 0;
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }

    if (i - start >= k) {
      if (map.get(a[start]) === 1) {
        map.delete(a[start]);
      } else {
        map.set(a[start], map.get(a[start]) - 1);
      }
      start++;
    }
    if (i >= k - 1) {
      console.log(k-map.size);
    }
  }
};
duplicate(a, k);
