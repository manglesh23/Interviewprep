const  intervals = [[1,3],[2,6],[8,10],[9,18]];

const mergerIntervals=(intervals)=>{
    let newinter=[];
    for(let i=0;i<intervals.length;i++){
        console.log(intervals[i][1]);
        if(i+1<intervals.length && intervals[i][1]>intervals[i+1][0] ){
             newinter.push([intervals[i][0],intervals[i+1][1]]);
             i++;
        }else{
            newinter.push(intervals[i]);
        }

    }
    console.log(newinter);
}

mergerIntervals(intervals);