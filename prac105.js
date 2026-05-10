const a=[3,2,1,5,6,9,8,5];

const subarray=(a,target)=>{
    let curr=a[0];
    let start=0;
    for(let i=1;i<=a.length;i++){
        while(curr>target && start<i-1){
            curr=curr-a[start];
            start++;

        }
        if(curr===target){
            console.log(start,i-1);
            return;
        }
        if(i<a.length){
            curr=curr+a[i];
        }
    }
    console.log("not found")
}
subarray(a,22)