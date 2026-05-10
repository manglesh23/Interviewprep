const a=[4,5,6,7,1,2,3];

const findpivot=(a)=>{
    let low=0;
    let right=a.length;
    while(low<right){
        let mid=Math.floor((low+right)/2);
        if(a[mid]>a[mid+1]){
            return mid+1;
        }
        if(a[mid]<a[mid-1]){
            return mid;
        }
        if(a[mid]>a[low]){
            low=mid+1;
        }else{
            right=mid-1;
        }
    }
}

console.log(a[findpivot(a)]);