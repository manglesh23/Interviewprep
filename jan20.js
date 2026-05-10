let s1="anagram";
let s2="naagram";

const checkanagram=(s1,s2)=>{
    let temp1=s1.split('').sort().join('');
    let temp2=s2.split('').sort().join('');
    if(temp1===temp2){
        return true;
    }
    return false;
}

console.log(checkanagram(s1,s2));