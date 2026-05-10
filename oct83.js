let a = [5, 3, 8, 7, 9, 2];
let k = 3;

const getKthlargest = (a, k) => {
  let set = new Set(a);
  let maxLen = 0;
  let res = [];
  for (let v of set) {
    if (!set.has(v - 1)) {
      let curLen = 1;
      let temp = [v];
      let num = v + 1;

      while (set.has(num)) {
        curLen++;
        temp.push(num);
        num++;
      }

      if (curLen > maxLen) {
        maxLen = curLen;
        res = temp;
      }
    }
  }
  console.log(maxLen, res);
};
getKthlargest(a, k);
