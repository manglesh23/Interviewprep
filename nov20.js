let a = [2,1,3,5,4,6,7];
 k = 2;

const getWinner = (a, k) => {
  let count = 0;
  let map = new Map();
  let winner=0;
  while (count <= k) {
    if (a[0] < a[1]) {
      let ele = a.shift();
      a.push(ele);
      map.set(a[1], (map.get(a[1]) || 0) + 1);
      if (map.get(a[1]) > count) {
        count = map.get(a[1]);
        winner=a[1];
      }
    }
    if (a[0] > a[1]) {
      let temp = a[1];
      a[1] = a[0];
      a[0] = temp;
      let ele = a.shift();
      a.push(ele);
      map.set(a[0], (map.get(a[0]) || 0) + 1);
      if (map.get(a[0]) > count) {
        count = map.get(a[0]);
        winner=a[0];
      }
    }
  }
  console.log(winner);
};

getWinner(a,k);