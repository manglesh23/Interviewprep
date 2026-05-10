let str="eceba";
let k=2;

const longtesSubWithK=(str,k)=>{
    let count=new Map();
let left=0;
let maxLen=0;
let newStr='';
    for(let right=0;right<str.length;right++){
        count.set(str[right],(count.get(str[right])||0)+1);

        while(count.size>k){
           count.set(str[left],count.get(str[left])-1);
           if(count.get(str[left])===0){
            count.delete(str[left]);
           }
           left++;
        }
        if(right-left+1>maxLen){
            maxLen=right-left+1;
            newStr=str.slice(left,right+1);
        }
    }
    console.log(maxLen,newStr);
}
longtesSubWithK(str,k);
