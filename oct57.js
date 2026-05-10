let s = "cbaebabacd";
let pList = ["abc", "bca", "a", "", null, "acb"];

const getAnagramWithEach = (s, pList) => {
  let groupedList = new Map();
  for (let v of pList) {
    // console.log(v);
    if (!v || typeof v !== "string" || v.length === 0) {
      continue;
    }
    let sorted = [...v].sort().join("");
    if (!groupedList.has(sorted)) {
      groupedList.set(sorted, []);
    }
    groupedList.get(sorted).push(v);
  }
//   console.log(groupedList);
  let res = {};
  for (let [key, pattern] of groupedList) {
    // console.log(pattern);
    let v = pattern[0];
    let pmap = new Map();
    for (let i = 0; i < v.length; i++) {
      pmap.set(v[i], (pmap.get(v[i]) || 0) + 1);
    }
    let left = 0;
    let smap = new Map();
    let index = [];
    for (let i = 0; i < s.length; i++) {
      smap.set(s[i], (smap.get(s[i]) || 0) + 1);
      if (i - left + 1 > v.length) {
        smap.set(s[left], smap.get(s[left]) - 1);
        if (smap.get(s[left]) === 0) {
          smap.delete(s[left]);
        }
        left++;
      }
      if (compare(smap, pmap)) {
        index.push(left);
      }
    }
    for (let word of pattern) {
      res[word] = index;
    }
  }
  console.log(res);
};

const compare = (smap, pmap) => {
  if (smap.size !== pmap.size) return false;
  for (let [key, value] of smap) {
    if (pmap.get(key) !== value) {
      return false;
    }
  }
  return true;
};
getAnagramWithEach(s, pList);
