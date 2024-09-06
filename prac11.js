const a=[9,5,4,0,-3,2,5,1];

const quickSort=(a)=>{
    if(a.length<=1){
        return a;
    }
    let left=[];
    let right=[];
    let pivot=a[a.length-1];

   for(let i=0;i<a.length-1;i++){
    if(a[i]<pivot){
        left.push(a[i]);
    }else{
        right.push(a[i]);
    }
   }
   return [...quickSort(left),pivot,...quickSort(right)];
}

console.log(quickSort(a));