const a=[1,2,-3,4,5,-1,6,-9,10];

const maxSumSubArray=(a)=>{
    let currsum=0;
    let start=0;
    let end=0;
    let maxsum=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>currsum+a[i]){
            currsum=a[i];
            start=i;
        }else{
            currsum+=a[i];
        }
        if(currsum>maxsum){
            maxsum=currsum;
            end=i;
        }
    }
    console.log(maxsum,start,end);
    console.log(a.slice(start,end+1))
}

maxSumSubArray(a);