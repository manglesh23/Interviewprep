const a=[1,2,3,4,4,4,4,5,6,7];

const firstocc=(a,target)=>{
    let pos=0;
    let low=0;
    let high=a.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(a[mid]>target){
            high=mid-1;
        }
        if(a[mid]<target){
            low=mid+1;
        }
        if(a[mid]===target){
            pos=mid;
            high=mid-1;
        }
    }
    console.log(pos);
}

const lastocc=(a,target)=>{
    let pos=0;
    let low=0;
    let high=a.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(a[mid]>target){
            high=mid-1;
        }
        if(a[mid]<target){
            low=mid+1;
        }
        if(a[mid]===target){
            pos=mid;
            low=mid+1;
        }
    }
    console.log(pos);
}

firstocc(a,4);
lastocc(a,4);

