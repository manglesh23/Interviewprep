const a=[1,33,2,6,5,4,7];

const subarraysum=(a,target)=>{
    let currsum=a[0];
    let start=0;
    let temp=0;
    let end=0;

    for(let i=1;i<a.length;i++){
       
        while(currsum>target && start<i-1){
            currsum=currsum-a[start];
            start++;
        }
       
        if(currsum===target){
            console.log(start,i);
            return;
        }
        if(currsum<target){
            currsum+=a[i];
        }
    }
    
}

subarraysum(a,16)