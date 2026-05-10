const str = "this is the greatest dayyy";

const countchar = (str) => {
  let obj = {};
  let max = 0;
  let mostChar = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") {
      obj[char] = (obj[char] || 0) + 1;
    }
    if (obj[char] > max) {
      max = obj[char];
      mostChar = char;
    }
  }
  console.log(obj);
  console.log(max, mostChar);

  // for(let [key,value] of Object.entries(obj)){
  //     console.log(key,value);
  // }
  let array = str.split(" ");
  
  let maxcharOcc = 0;
  let findword;
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let obj = {};
    for (let char of word) {
      obj[char] = (obj[char] || 0) + 1;
      if (obj[char] > maxcharOcc) {
        maxcharOcc = obj[char];
        findword = word;
      }
    }
  }
  console.log("find:-",findword,maxcharOcc);
};
countchar(str);
