const text="aabaabaa";
const pat="aaba";

const countAnagram=(text,pat)=>{
    let patFreq=Array(26).fill(0);
    for(let i=0;i<pat.length;i++){
        patFreq[pat.charCodeAt(i)-97]++;
    }
    console.log(patFreq);
}
countAnagram(text,pat);