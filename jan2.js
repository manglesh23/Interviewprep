const a = [1, 2, 1, 3, 2, 4, 5];

const findDuplicate = (a) => {
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }
  }
  console.log(map);
};
findDuplicate(a);
