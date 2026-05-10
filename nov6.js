let a = [1, 2, -3, 4, -4, 6, 5, -7, 8];
let k = 4;

const getAllSubarraysWithSumK = (a, k) => {
  let map = new Map();
  let sum = 0;
  map.set(0, [-1]); // base case
  const result = [];

  for (let i = 0; i < a.length; i++) {
    sum += a[i];

    if (map.has(sum - k)) {
      for (let start of map.get(sum - k)) {
        result.push(a.slice(start + 1, i + 1));
      }
    }

    if (!map.has(sum)) map.set(sum, []);
    map.get(sum).push(i);
  }

  return result;
};

console.log(getAllSubarraysWithSumK(a, k));
