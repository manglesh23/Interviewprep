let s="abbbcdbbb";

const getLongestString=(s)=>{
    let set= new Set();
    let left=0;
    let maxLen=0;
    let maxStr='';
    for(let i=0;i<s.length;i++){
        while(set.has(s[i]) && left<i){
            set.delete(s[left]);
            left++;
        }
        if(i-left+1>maxLen){
            maxLen=i-left+1;
            maxStr=s.slice(left,i+1);
        }
        set.add(s[i]);
    }
    console.log(maxLen,maxStr);
}
getLongestString(s);
