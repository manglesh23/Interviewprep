const s = "cbaebabacd";
const pList = ["abc", "bca", "a", "", null, "acb"];

const getAnagram = (s, pList) => {
  let res = new Map();

  for (let v of pList) {
    let pmap = new Map();
    if (v !== null && v.length > 0) {
        // console.log(v)
      for (let i = 0; i < v.length; i++) {
        pmap.set(v[i], (pmap.get(v[i]) || 0) + 1);
      }
    //   console.log(pmap)
      let smap = new Map();
      let left = 0;

      for (let i = 0; i < s.length; i++) {
        smap.set(s[i], (smap.get(s[i]) || 0) + 1);

        if (i - left + 1 > v.length) {
          smap.set(s[left], smap.get(s[left]) - 1);
          if (smap.get(s[left]) === 0) {
            smap.delete(s[left]);
          }
          left++;
        }

        if (compareMap(smap, pmap)) {
          if (res.has(v)) {
            res.get(v).push(left);
          } else {
            res.set(v, [left]);
          }
        }
      }
    }
  }
  console.log(res)
};

const compareMap = (smap, pmap) => {
  if (smap.size !== pmap.size) {
    return false;
  }
  for (let [key, value] of smap) {
    if (pmap.get(key) !== value) {
      return false;
    }
  }
  return true;
};

getAnagram(s, pList);
