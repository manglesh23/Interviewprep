const a=[3,2,15,49,0,7];

const quicksort=(a)=>{
    if(a.length<=1){
        return a;
    }

    let pi=a[a.length-1];
    let left=[];
    let right=[];

    for(let i=0;i<a.length-1;i++){
        if(a[i]<pi){
            left.push(a[i]);
        }else{
            right.push(a[i]);
        }
    }
    return [...quicksort(left),pi,...quicksort(right)]
}

console.log(quicksort(a));
console.log(a);