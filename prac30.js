const a=[1,4,5,6,7,9,88,90];

const binarysearch=(a,target)=>{
    let low=0;
    let high=a.length-1;
    while(low<=high){
        let mid= Math.floor((low+high)/2);
        if(a[mid]<target){
            low=mid+1;
        }
        if(a[mid]>target){
            high=mid-1;
        }
        if(a[mid]===target){
            console.log(mid);
            return;
        }
    }
}

binarysearch(a,7);