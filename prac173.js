const s = "zxyzxyzxya";

const longestsub = (s) => {
  let long = 0;
  let longstr='';
  for (let i = 0; i < s.length; i++) {
    let set = new Set(s[i]);
    let curr = 1;
    let j=i+1;
    while (!set.has(s[j]) && j<s.length) {
      curr++;
      set.add(s[j]);
      j++;
      
    }
    if (curr > long) {
      long = curr;
      longstr =Array.from(set).join('');
    }
    // console.log(set)
  }
  console.log(long);
  console.log(longstr);
};

longestsub(s);
