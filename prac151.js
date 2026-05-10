const  strs = ["flower","low","lower"];
  console.log(strs[0].indexOf("fle"));
const longestprefix=(strs)=>{
    let prefix=strs[0];
    console.log(prefix);
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)===-1){
            prefix=prefix.slice(0,prefix.length-1);
            if(!prefix){
                return "";
            }
        }
    }
    return prefix;
}
console.log(longestprefix(strs))