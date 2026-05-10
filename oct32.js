let a=[2,4,3,5,8,6,9,6,0,8,2];

const maxInWindow=(a)=>{
    let k=3;
    // console.log(a);
    let res=[];
    let queue=[];
    for(let i=0;i<a.length;i++){
        if(queue[0]<=i-k){
            queue.shift();
        }
        while(queue.length && a[queue[queue.length-1]]<=a[i]){
            queue.pop();
        }
        queue.push(i);
        if(i>=k-1){
            res.push(a[queue[0]])
        }
    }
    console.log(res)
}

maxInWindow(a);
