const a = [2, 10, 3, 4, 5, 7];

const longestseq = (a) => {
  let set = new Set(a);
  let long = 0;
  //   let res = [];
  let lonseq = [];
  for (let i = 0; i < a.length; i++) {
    if (set.has(a[i] - 1)) {
      let currnum = a[i];
      let currstreak = 1;
      let res = [currnum];
      while (set.has(currnum)) {
        currstreak++;
        currnum++;
        res.push(currnum);
      }
      if (currstreak > long) {
        long = currstreak;
        lonseq = res;
      }
    }
  }
  console.log(long);
  console.log(lonseq);
};
longestseq(a);
