const a=[1,5,7,9,10,11,14,16,18];

const binarySearch=(a,k)=>{
    let low=0;
    let high=a.length-1;
    while(low<=high){
      let mid= Math.floor((low+high)/2);
      if(a[mid]===k){
        console.log(mid);
        return;
      }
      if(a[mid]>k){
        high=mid-1;
      }else{
        low=mid+1;
      }
    }
}
binarySearch(a,11);