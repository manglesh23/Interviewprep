const a=[2,1,-4,3,-7,6,9,8];

const subarray=(a)=>{
    let maxsum=a[0];
    let currsum=a[0];
    let start=0;
    let temp=0;
    let end=0;

    for(let i=1;i<a.length;i++){
        if(a[i]>currsum+a[i]){
            currsum=a[i];
            temp=i;
        }else{
            currsum+=a[i];
        }
        if(maxsum<currsum){
            maxsum=currsum;
            start=temp;
            end=i;
        }
    }
    console.log(start,end,maxsum);
}

subarray(a);