const a=[1,2,3,3,3,4,5,6];

const firstAndLast=(a,k)=>{
    let left= 0;
    let right=a.length-1;
    let first=0;
    let last=0;
    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(a[mid]===k && a[mid-1]<a[mid]){
            first=mid;
            break;
        }else if(a[mid]===k){
            first=mid;
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    console.log(first);

     left=0;
     right=a.length-1;
    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(a[mid]===k && a[mid+1]>a[mid]){
            last=mid;
            break;
        }else if(a[mid]===k){
            first=mid;
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    console.log(last);
}

firstAndLast(a,3);