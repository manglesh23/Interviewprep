let s="pqpqs";
let k=2;

const substringKDistinct=(s,k)=>{
    let count=new Map();
    let left=0;
    let res=0;
    let set=new Set();
    let moveWindow=0;
    for(let right=0;right<s.length;right++){
        count.set(s[right],(count.get(s[right])||0)+1);
       
        while(count.size>k){
            count.set(s[left],(count.get(s[left])-1));
            if(count.get(s[left])===0){
                count.delete(s[left]);
            }
            left++;
        }
        moveWindow=left;

        while(count.size<=k && moveWindow<=right){
            set.add(s.slice(moveWindow,right+1));
            moveWindow++;
        }

        res+=right-left+1;
        
    }
    console.log(res);
    console.log(set);
}

substringKDistinct(s,k);