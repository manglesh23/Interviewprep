const a=[1,2,-1,4,3,-5,-7,6,-9,0,9];
const k=3;

const firstNegative=(a,k)=>{
    let result=[];
    let queue=[];
    for(let i=0;i<a.length;i++){
        if(a[i]<0){
            queue.push(i);
        }
        if(queue.length>0 && queue[0]<i-k+1){
            queue.shift();
        }
        if(i>=k-1){
            result.push(queue.length>0 ? a[queue[0]]:0);
        }
    }
    console.log(result);
}
firstNegative(a,k);