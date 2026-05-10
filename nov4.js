let a = [1, 0,1,0,1];
let k=2;
const getZeroSumSubarrays = (a) => {
  let map = new Map();
  let sum = 0;
  map.set(0, -1); // base case for subarray starting at index 0
  let count=0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (map.has(sum-k)) {
      console.log(`Zero-sum subarray: [${map.get(sum-k) + 1} ... ${i}]`);
      count++;
    }
    map.set(sum, i);
  }
  console.log(count)
};

getZeroSumSubarrays(a);
