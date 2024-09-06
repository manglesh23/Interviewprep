const a=[1,2,3,3,3,4,5,6,7,8,9];

const first=(a,target)=>{
    let l=0;
    let r=a.length-1;
    let mid=Math.floor((r+l)/2);
    let pos=-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(a[mid]===target){
          pos=mid;
          r=mid-1
        }else if(a[mid]>target){
            r=mid-1;
        }else{
            l=mid+1
        }
    }
    return pos;
}

const last=(a,target)=>{
    let l=0;
    let r=a.length-1;
    let pos=-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(a[mid]===target){
            pos=mid;
            l=mid+1;
        }else if(a[mid]<target){
            l=mid+1;
        }else{
            r=mid-1;
        }
    }
    return pos;
}

console.log(first(a,3));
console.log(last(a,3));