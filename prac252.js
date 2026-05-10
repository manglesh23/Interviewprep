const a=[7, 10, 4, 3, 20, 15];
let k=2;
const partition=(a,left,right)=>{
    let i=left;
    let pivot= a[right];
    for(let j=left;j<right;j++){
       if(a[j]<=pivot){
        [a[i],a[j]]=[a[j],a[i]];
        i++;
       }
    }
    [a[i],a[right]]=[a[right],a[i]];
    return i;
}
const quickSelect=(a,left,right,k)=>{
    if(left===right){
        return a[left]
    }
    let pivot= partition(a,left,right);
    if(pivot===k){
        return a[pivot];
    }else if(pivot>k){
      return  quickSelect(a,left,pivot-1,k);
    }else{
       return quickSelect(a,pivot+1,right,k);
    }
}
const kthSmallest=(a,k)=>{
    // return (quickSelect(a,0,a.length-1,k-1));
    console.log(quickSelect(a,0,a.length-1,k-1));
}

kthSmallest(a,k);
