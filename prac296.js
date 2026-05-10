const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k=3;

const firstNegative=(arr,k)=>{
    let result=[];
    let queue=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            queue.push(i);
        }
        if(queue.length && queue[0]<i-k+1){
            queue.shift();
        }
        if(i>=k-1){
           result.push(queue.length?arr[queue[0]]:0);
        }
    }
    console.log(result);
}

firstNegative(arr,k);