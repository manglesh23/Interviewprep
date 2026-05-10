const a=[1,2,3,4,5,6,7,8,9,10]
const target=15;

const subarraysum=(a,target)=>{
    let start=0;
    let end=0;
    let currsum=a[0];
    for(let i=1;i<a.length;i++){
        while(currsum>target && start<i-1){
            currsum-=a[start];
            start++;
        }
        if(currsum===target){
            console.log(a.slice(start,i));
        };
        currsum+=a[i];
    }
}

subarraysum(a,target);