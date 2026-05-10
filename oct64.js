let str = "abcgthyrtbcdab";
let t = "abc";

const getSubStringFromSforT = (str, t) => {
  let tmap = new Map();
  for (let i = 0; i < t.length; i++) {
    tmap.set(t[i], (tmap.get(t[i]) || 0) + 1);
  }
  let left = 0;
  let smap = new Map();
  let formed = 0;
  let minLen = str.length;
  let minStr = "";
  for (let i = 0; i < str.length; i++) {
    smap.set(str[i], (smap.get(str[i]) || 0) + 1);

    if (tmap.has(str[i]) && smap.get(str[i]) === tmap.get(str[i])) {
      formed++;
    }
    while (left <= i && formed === tmap.size) {
      if (i - left + 1 < minLen) {
        minLen = i - left + 1;
        minStr = str.slice(left, i + 1);
      }
      smap.set(str[i], smap.get(str[i]) - 1);
      if (tmap.has(str[i]) && smap.get(str[i]) < tmap.get(str[i])) {
        formed--;
      }
      left++;
    }
  }
  console.log(minLen, minStr);
};

getSubStringFromSforT(str, t);
