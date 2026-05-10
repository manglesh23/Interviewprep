let a = [1, 1, 3, 2, 1, 4, 3, 2, 2, 5, 4];

const sortMap = (a) => {
  let map = new Map();

  for (let i = 0; i < a.length; i++) {
    map.set(a[i], (map.get(a[i]) || 0) + 1);
  }
  console.log(map.entries());
  let sorted = Array.from([...map.entries()]).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(sorted);
  let newMap= new Map(sorted);
  console.log("new Mao:-",newMap)

  let res = [];
  for (let [num, freq] of sorted) {
    res.push(...Array(freq).fill(num));
  }
  console.log(res);
};
sortMap(a);
