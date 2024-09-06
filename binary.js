const a=[1,2,3,6,7,9];
const k=5;

const find=(a,k)=>{
    let low=0;
    let high=a.length-1;
    let position=-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(a[mid]===k){
            console.log(mid);
            return;
        }else if(a[mid]>k){
            high=mid-1;
        }else{
            low=mid+1
        }
    }
    console.log("Not found");
}
find(a,k)
