let str = "abcabgftrabc";

const longestSub = (str) => {
  let maxLen = 0;
  let left = 0;
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
   
    while (map.has(str[i])) {
      map.set(str[left], map.get(str[left]) - 1);
      if (map.get(str[left]) === 0) {
        map.delete(str[left]);
      }
      left++;
    }
     map.set(str[i], (map.get(str[i]) || 0) + 1);
    maxLen = Math.max(maxLen, i - left + 1);
  }
  console.log(maxLen);
};
longestSub(str);
