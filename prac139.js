const a=[2,1,-4,3,-2,5,6,7,-22,24];

const subarr=(a)=>{
    let maxsum=a[0];
    let currsum=a[0];
    let start=0;
    let end=0;
    for(let i=1;i<a.length;i++){
        if(a[i]>currsum+a[i]){
            currsum=a[i];
            start=i;
        }else{
            currsum+=a[i];
        }
        if(maxsum<currsum){
            maxsum=currsum;
            end=i;
        }
    }
    console.log(maxsum);
    console.log(start,end);
}

subarr(a);