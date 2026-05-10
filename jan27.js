const a = [1, 3, 2, 5, 4, 3,2];

const createmap = (a) => {
  let map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }
  }
  console.log(map);
  let sorted = [...map.entries()].sort((a, b) => {
    if (a[1] === b[1]) {
     return a[0] - b[0];
    }else{
       return a[1]-b[1];
    }
  });
  console.log(sorted);
};
createmap(a);
