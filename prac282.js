const s='geeksforgeeks';

const longdistinct=(s)=>{
    let start=0;
    let set= new Set();
    let maxLength=0;
    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[start]);
            start++;
        }
        set.add(s[i]);
        maxLength=Math.max(maxLength,i-start+1);
    }
    console.log(maxLength);
}

longdistinct(s);