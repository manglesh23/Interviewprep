let s = "bcabc";

const removeDuplicate = (s) => {
  let a = "";
  let getSplit = s.split("");
  let set = new Set(getSplit);
  console.log("Set:-", set);
  console.log("Split:-", getSplit);

  for (let v of set) {
    a += v;
  }
  console.log("V:-", a);
};

removeDuplicate(s);
