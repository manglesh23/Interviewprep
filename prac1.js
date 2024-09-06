const a=[1,4,2,6,0,8,-1];

const quicksort=(a)=>{
    let left=[];
    let right=[];
    let pivot= a[a.length-1];
    if(a.length<=1){
        return a;
    }
    for(let i=0;i<a.length-1;i++){
        if(a[i]<pivot){
            left.push(a[i]);
        }else{
            right.push(a[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort(a));