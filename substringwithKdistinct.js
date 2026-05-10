const str = "aba";
const k = 2;
const substringwithk = (str, k) => {
  const map = new Map();
  let start = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);

    while (map.size > k) {
      map.set(str[start], map.get(str[start]) - 1);
      if (map.get(str[start]) === 0) {
        map.delete(str[start]);
      }
      start++;
    }
    if (map.size === k) {
      count += i - start + 1;
    }
  }
  console.log(count);
};
substringwithk(str, k);
