const a=[1,1,2,3,4,3];

const findpeak=(a)=>{
    let left=0;
    let right=a.length-1;

    while(left<right){
        let mid=Math.floor((left+right)/2);

        if(a[mid]<a[mid+1]){
            left=mid+1;
        }else{
            right=mid;
        }
    }
    console.log(a[left]);
}

findpeak(a);