const a=[1,3,4,7,9,10];

const find=(a)=>{
    let target=10;
    let low=0;
    let high=a.length-1;
    while(low<=high){
      let mid= Math.floor((low+high)/2);
      if(target<a[mid]){
        high=mid-1;
      }else{
        low=mid+1;
      }
      if(target===a[mid]){
        return mid;
      }
    }
    return -1;
}
console.log(find(a));