let a = [0, 1, 1, 1, 1, 0, 0, 0];

const getMaxSubArray = (a) => {
  let count = 0;
  let maxLen = 0;
  let map = new Map();
  let end = 0;
  let start = 0;
  map.set(0, -1);
  for (let i = 0; i < a.length; i++) {
    count += a[i] === 1 ? 1 : -1;
    if (map.get(count)) {
      //   maxLen = Math.max(maxLen, i - map.get(count));
      if (maxLen < i - map.get(count)) {
        maxLen = i - map.get(count);
        start = map.get(count);
        end = i;
      }
    } else {
      map.set(count, i);
    }
  }
  console.log(maxLen, start + 1, end);
};

getMaxSubArray(a);
