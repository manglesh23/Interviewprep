const a=[100,3,2,4,6,5];

const longest=(a)=>{
    let long=0;

    let set= new Set(a);
    for(let i=0;i<a.length;i++){
        if(!set.has(a[i]-1)){
            let currNum=a[i];
            let streak=1;
            while(set.has(currNum+1)){
                currNum++;
                streak++;
            }
            long=Math.max(long,streak);
        }
    }
    console.log(long);
}

longest(a);