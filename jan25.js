const a = [2, 10, 3, 4, 5, 7,6];

const longestSeq=(a)=>{
    let set=new Set(a);
    let lonstreak=0;
    let longseq=[];
    for(let i=0;i<a.length;i++){
        let currnum=a[i];
        let streak=1;
        let res=[currnum];
        currnum++;
        while(set.has(currnum)){
            res.push(currnum);
            currnum++;
            streak++;
           
        }
        if(streak>lonstreak){
            lonstreak=streak;
            longseq=res;
        }
    }
    console.log(lonstreak,longseq);
}

longestSeq(a);