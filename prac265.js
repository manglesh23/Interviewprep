const text="aabaabaa";
const pat="aaba";

// console.log(text.substring(0,pat.length));
for(let i=0;i<=text.length-pat.length;i++){
    console.log(text.substring(i,i+pat.length));

}

let text1="uioyop";
console.log(text1.split('').sort().join(''))