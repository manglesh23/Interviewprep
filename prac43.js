const s1="adgh";
const s2="adfgjkh";

const subseq=(s1,s2)=>{
    let m=s1.length;
    let n=s2.length;
    let i=0;
    let j=0;
    while(i<m && j<n){
        if(s1[i]===s2[j]){
            i++;
        }
        j++;
    }
    return i===m?1:0;
}

console.log(subseq(s1,s2));