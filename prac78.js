const a=[2,3,1,5,4,6,7];

const subarray=(a,target)=>{
    let currsum=a[0];
    let start=0;
    let end=0;
    for(let i=1;i<a.length;i++){
       while(currsum>target && start<i-1){
        currsum-=a[start];
        start++;
       }
       if(currsum<target){
        currsum+=a[i];
       }
       if(currsum===target){
        end=i-1;
        break;
       }
    }
    console.log(start,end);
}

subarray(a,16);