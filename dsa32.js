const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval = [4,8]

const insertIntervals=(intervals,newInterval)=>{
    for(let i=0;i<intervals.length;i++){
        let curr=intervals[i];
        if(curr[0]<newInterval[0] && curr[1]>newInterval[0]){
            curr[1]=newInterval[1];
        }
    }
    console.log(intervals);
    let result=[intervals[0]];
    for(let i=1;i<intervals.length;i++){
        let curr=intervals[i];
        let prev=result[result.length-1];
        if(prev[1]>=curr[0]){
            prev[1]=Math.max(curr[1],prev[1]);
        }else{
            result.push(curr);
        }
    }
    console.log(result);
}
insertIntervals(intervals,newInterval);