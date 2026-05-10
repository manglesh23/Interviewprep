let s = "abcftghyr";
let t = "ctgf";

const getAnaStringOfTinS = (s, t) => {
  let tmap = new Map();
  for (let i = 0; i < t.length; i++) {
    tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
  }
  console.log(tmap)
  let left = 0;
  let smap = new Map();
  for (let i = 0; i < s.length; i++) {
    smap.set(s[i], (smap.get(s[i]) || 0) + 1);
    if (i - left + 1 > t.length) {
      smap.set(s[left], smap.get(s[left]) - 1);
      if (smap.get(s[left]) === 0) {
        smap.delete(s[left]);
      }
      left++;
    }
    if (comapre(smap, tmap)) {
      console.log(left);
    }
  }
};
const comapre = (smap, tmap) => {
    // console.log(smap,tmap)
  if (smap.size !== tmap.size) return false;
  for (let [key, value] of smap) {
    if (tmap.get(key) !== value){
        return false
    }
  }
  return true;
};
getAnaStringOfTinS(s, t);
