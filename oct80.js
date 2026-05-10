let a = [100, 200, 4, 3, 1, 2];

const longestCons = (a) => {
  a.sort((a, b) => a - b);
  console.log(a);
//   let left = 0;
  let maxLen = 1;
  let curLen = 1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i - 1]) continue;

    if (a[i] === a[i - 1] + 1) {
      curLen++;
    } else {
      curLen = 1;
    }
    maxLen = Math.max(curLen, maxLen);
  }
  console.log(maxLen);
};

longestCons(a);
