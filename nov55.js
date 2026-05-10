let a = [2, -1, 3, -2, 4, 5, 6, -1, 7];
let k = 10;
const getSum = (a, k) => {
  let prefix = new Map();
  prefix.set(0, -1);
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (prefix.has(sum - k)) {
      console.log(prefix.get(sum - k)+1,i);
    }
    if(!prefix.has(sum)){
    prefix.set(sum, i);
    }
  }
};

getSum(a,k);
