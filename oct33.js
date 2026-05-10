let a=[3,2,4,5,1,6,8,7,9];

let k=3;

const maxInWindow=(a,k)=>{
    let queue=[];
    let res=[];

    for(let i=0;i<a.length;i++){
        if(queue[0]<=i-k){
            queue.shift();
        }

        while(queue.length && a[queue[queue.length-1]]>a[i]){
            queue.pop();
        }
        queue.push(i);
        if(i>=k-1){
            res.push(a[queue[0]]);
        }
    }
    console.log(res);
}
maxInWindow(a,k);