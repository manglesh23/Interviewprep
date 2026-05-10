const a=[100,1,300,2,4,3,4,6,5,9,8,7];

const longest=(a)=>{
    let set=new Set(a);
    let long=0;
    for(let v of a){
        if(!set.has(v-1)){
            let curr=v;
            let streak=1; 
            while(set.has(curr+1)){
                curr++;
                streak++;
            }
            long=Math.max(long,streak);
        }
     
    }
    console.log(long);
}

longest(a);