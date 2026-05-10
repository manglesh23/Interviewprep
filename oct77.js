let a=[[1,2],[3,5],[6,7],[8,10],[12,16]];
let newInterval=[4,8];

const mergeInterval=(a,newInterval)=>{
    let result=[];
    let[newStart,newEnd]=newInterval;
    let i=0;
    while(i<a.length && a[i][1]<newStart){
        result.push(a[i]);
        i++;
    }
    while(i<a.length && a[i][0]<=newEnd){
        newStart=Math.min(a[i][0],newStart);
        newEnd=Math.max(a[i][1],newEnd);
        i++;
    }
    result.push([newStart,newEnd]);
    while(i<a.length){
        result.push(a[i]);
        i++
    }
    console.log(result)
}
mergeInterval(a,newInterval)