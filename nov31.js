let a = [0, 1, 1, 1, 0, 0, 0];

const getLongestSubArray = (a) => {
  let map = new Map();
  map.set(0, -1);
  let count = 0;
  let maxLen = 0;
  let start=0;
  let end=0;
  for (let i = 0; i < a.length; i++) {
    count += a[i] === 1 ? 1 : -1;
    if (map.has(count)) {
      maxLen = Math.max(maxLen, i - map.get(count));
      start= map.get(count);
      end=i;
    } else {
      map.set(count, i);
    }
  }
  console.log("Output:-",maxLen,start,end);
};
getLongestSubArray(a);
