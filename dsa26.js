const a=[1,2,3,6,8,9];
let k=7;
 
const findPosition=(a,k)=>{
    let low= 0;
    let high=a.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(a[mid-1]<k && a[mid]>k){
            console.log(mid);
        }
        if(a[mid-1]>k){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
}
findPosition(a,k);