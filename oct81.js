let a = [50, 1, 2, 3, 5, 4];

const getLongestConsequence = (a) => {
  let set = new Set(a);
  let set1 = new Set(a);
  // console.log(set)

  let maxLen = 1;
  for (let v of set) {
    if (!set.has(v - 1)) {
      let curLen = 1;
      let num = v + 1;
      while (set.has(num)) {
        curLen++;
        num++;
      }
      maxLen = Math.max(maxLen, curLen);
    }
  }
  console.log(maxLen);
};
getLongestConsequence(a);
