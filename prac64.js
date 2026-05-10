const a=[1,2,0,1];

const findpeek=(a)=>{
    let left=0;
    let right=a.length-1;
    while(left<right){
        let mid= Math.floor((left+right)/2);
        if(a[mid]<a[mid+1]){
            left=mid+1;
        }else{
            right=mid;
        }
    }
    console.log(a[left]);
}

findpeek(a);