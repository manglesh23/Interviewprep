const a= [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

const longest=(a)=>{
    let set=new Set(a);
   let long=0;
   let res=[];
    for(let v of a){
        let currstreak=0;
        if(!set.has(v-1)){
            let currnum=v;
             currstreak=1;
             res.push(v);
            while(set.has(currnum+1)){
                
                currstreak++;
                currnum++
                res.push(currnum);
            }
        }
        long=Math.max(long,currstreak);
    }
    console.log(long);
    console.log(res);
    for(let i=0;i<res.length;i++){
        //  console.log(i,i+long);
         let start=i;
         let count=1;
         while(start<i+long && i+long<=res.length){
            if(res[start]+1!=res[start+1]){
                break;
            }
            count++;
            start++;
         }
        //  console.log("Count:-",count);
         if(count===long){
            console.log("Value",i,i+long-1);
            console.log("Array:-",res.slice(i,i+long));
         }
    }
}

longest(a);