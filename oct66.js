let s = "abcdfgjtyfgtr";
let t = "fgt";

const getMinSubstringInSfirT = (s, t) => {
  let tmap = new Map();
  for (let i = 0; i < t.length; i++) {
    tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
  }
  let formed = 0;
  let left = 0;
  let smap = new Map();
  let minLen = s.length;
  let minStr = "";
  for (let i = 0; i < s.length; i++) {
    smap.set(s[i], (smap.get(s[i]) || 0) + 1);

    if (tmap.has(s[i]) && smap.get(s[i]) === tmap.get(s[i])) {
      formed++;
    }

    while (left <= i && formed === tmap.size) {
      if (i - left + 1 < minLen) {
        minLen = i - left + 1;
        minStr = s.slice(left, i + 1);
      }
      smap.set(s[left], smap.get(s[left]) - 1);
      if (tmap.has(s[left]) && smap.get(s[left]) < tmap.get(s[left])) {
        formed--;
      }
      left++;
    }
  }
  console.log(minLen, minStr);
};
getMinSubstringInSfirT(s, t);
