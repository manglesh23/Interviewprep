const str1="abc";
const str2="agdhbuyucio";

const checkifsubstring=(str1,str2)=>{
    const n=str1.length;
    const m=str2.length;
    let i=0;
    let j=0;
    while(i<n && j<m){
        if(str1[i]===str2[j]){
            i++;
        }
        j++;
    }
    if(i===n){
        return 1;
    }else{
        return 0;
    }
}

console.log(checkifsubstring(str1,str2));