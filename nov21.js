let a = [3, 2, 1];
k = 10;

const getWinner = (a, k) => {
  let map = new Map();
  while (true) {
    if (a[0] < a[1]) {
      map.set(a[1], (map.get(a[1]) || 0) + 1);
      if (map.get(a[1]) === k) {
        console.log(a[1]);
        return;
      }
      let ele = a.shift();
      a.push(ele);
    }
    if (a[0] > a[1]) {
      map.set(a[0], (map.get(a[0]) || 0) + 1);
      if (map.get(a[0]) === k) {
        console.log(a[0]);
        return;
      }
      let temp = a[1];
      a[1] = a[0];
      a[0] = temp;
      let ele = a.shift();
      a.push(ele);
    }
  }
};
getWinner(a, k);
