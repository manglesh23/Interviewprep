const intervals = [[1,3],[2,6],[8,10],[15,18]]

const mergeInterval=(intervals)=>{
    let result=[intervals[0]];
    for(let i=1;i<intervals.length;i++){
        let curr=intervals[i];
        let prev=result[result.length-1];
        if(curr[0]<prev[1]){
            prev[1]=Math.max(curr[1],prev[1]);
        }else{
            result.push(intervals[i]);
        }
    }
    console.log(result);
}
mergeInterval(intervals);