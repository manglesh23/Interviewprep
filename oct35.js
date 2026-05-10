let a = "abcfgdtrher";
let s = "cfgt";
let b = ["a", "b", "v"];

const checkSubstring = (a, s) => {
  for (let i = 0; i < a.length - s.length; i++) {
    let substring = a.slice(i, i + s.length);
    if (substring === s) {
      console.log("got the strinng");
      return;
    }
  }
  console.log("Not");
};

checkSubstring(a, s);
