let intervals= [[1,3],[2,6],[8,10],[15,18]];

const mergeIntervals=(intervals)=>{
    let merged=[intervals[0]];

    for(let i=1;i<intervals.length;i++){
        let current=intervals[i];
        let last=merged[merged.length-1];

        if(current[0]<=last[1]){
            last[1]=Math.max(current[1],last[1]);
        }else{
            merged.push(current);

        }
    }
    console.log(merged);
}

mergeIntervals(intervals);