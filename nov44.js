let a=[3,5,8,9,12,15];
let k=5;

const getElement=(a,k)=>{
    let left=0;
    let right=a.length-1;

    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(a[mid]<k){
            left=mid+1;
        }
        if(a[mid]>k){
            right=mid-1;
        }
        if(a[mid]===k){
            return mid;
        }
    }
}
console.log(getElement(a,k));