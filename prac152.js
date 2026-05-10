const strs = ["flower", "low", "lower"];

const commonfromall = (strs) => {
  let firststr = strs[0];
  let longest = "";
  for (let i = 0; i < firststr.length; i++) {
    for (let j = i + 1; j <= firststr.length; j++) {
      let substr = firststr.slice(i, j);

      if (strs.every((str) => str.includes(substr))) {
        if (substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  }
  console.log(longest);
};

commonfromall(strs);
