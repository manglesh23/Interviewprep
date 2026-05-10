const a=[4,5,6,7,1,2,3];

const target=2;

const findTarget=(a,target)=>{
    let left=0;
    let right=a.length-1;
    while(left<right){
        let mid=Math.floor((a[left]+a[right])/2);
        if(a[mid]>a[mid+1]){
            return mid+1;
        }
        if(a[mid]<a[mid-1]){
            return mid;
        }
        if(a[mid]>=a[left]){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
}

console.log(findTarget(a,target));