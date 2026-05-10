let s = "abcghtyureabc";
let p = ["cba", "", null, "uyer","abc"];

const getAnagramForListinS = (s, p) => {
  let map = new Map();
  for (let v of p) {
    // console.log(v)
    let pmap = new Map();
    if (typeof v === "string" && v.length > 0) {
        // console.log(v);
      for (let i = 0; i < v.length; i++) {
        pmap.set(v[i], (pmap.get(v[i]) || 0) + 1);
      }
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
        if (comapre(smap, pmap)) {
          if (!map.get(v)) {
            map.set(v, []);
          }
          map.get(v).push(left);
        }
      }
    }
  }
  console.log(map);
};

const comapre = (smap, pmap) => {
    // console.log(smap,pmap)
  if (smap.size !== pmap.size) return false;
  for (let [key, value] of smap) {
    if (pmap.get(key) !== value) {
      return false;
    }
  }
  return true;
};

getAnagramForListinS(s, p);
