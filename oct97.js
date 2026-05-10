let a=[2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56];
let k=4;

const getMininWindow=(a,k)=>{
    let deque=[];
    let res=[];
    for(let i=0;i<a.length;i++){
        while(deque.length && a[deque[deque.length-1]]<=a[i]){
            deque.pop();
        }
        deque.push(i);
        if(deque[0]<=i-k){
            deque.shift();
        }
        if(i>=k-1){
            res.push(a[deque[0]]);
        }
    }
    console.log(res)
}

getMininWindow(a,k);
