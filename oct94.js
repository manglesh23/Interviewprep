let s="abcgtyuhj";
let t="cgty"

const checkSubString=(s,t)=>{
    let left=0;
    for(let i=0;i<s.length;i++){
        if(i-left+1>t.length){
            left++;
        }
        if(comapre(s.slice(left,i+1),t)){
            return true
        }
    }
    return false

}
const comapre=(s,t)=>{
    if(s===t){
        return true
    }
    return false
}
console.log(checkSubString(s,t))