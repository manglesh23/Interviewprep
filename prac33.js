const a=[1,4,3,-1,0,9,7,8];

const sortarray=(a)=>{
    let left=[];
    let right=[];
    let pivot=a[a.length-1];
    
    if(a.length<=1)
        return a;

    for(let i=0;i<a.length-1;i++){
       if(a[i]<pivot){
        left.push(a[i])
       }else{
        right.push(a[i])
       }
    }

    return [...sortarray(left),pivot,...sortarray(right)];
}

console.log(sortarray(a));