let str="abvcbadbcft";

const longestSubstring=(str)=>{
    let map=new Map();
    let left=0;
    let maxLen=0;
    for(let r=0;r<str.length;r++){
        if(map.has(str[r])){
            left=Math.max(left, map.get(str[r])+1);
        }
        map.set(str[r],r);
        maxLen=Math.max(maxLen,r-left+1);
    }
    console.log(maxLen);
}
longestSubstring(str);