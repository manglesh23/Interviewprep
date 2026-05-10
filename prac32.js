const a=[3,2,1,0,9,7,8,5,6];

const subarraysum=(a,target)=>{
    let currsum=0;
    let start=0;

    for(let end=0;end<a.length;end++){
        currsum+=a[end];
        while(currsum>target && start<=end){
            currsum-=a[start];
            start++;
        }
        if(currsum===target){
            console.log(start,end);
            return;
        }
    }
}

subarraysum(a,17)