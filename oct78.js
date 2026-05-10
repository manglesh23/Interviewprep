let a=[[1,3],[6,9]];
let newInterval=[2,5];

const mergeInterval=(a,newInterval)=>{
    let res=[];
    let i=0;
    let [newStart,newEnd]=newInterval;
    while(i<a.length && a[i][1]<newStart){
        res.push(a[i]);
        i++;
    }

    while(i<a.length && a[i][0]<newEnd){
        newStart=Math.min(newStart,a[i][0]);
        newEnd= Math.max(newEnd,a[i][1]);
        i++;
    }
    res.push([newStart,newEnd]);

    while(i<a.length){
        res.push(a[i]);
        i++;
    }
    console.log(res)

}
mergeInterval(a,newInterval);