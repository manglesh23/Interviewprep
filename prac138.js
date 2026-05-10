const a=[1,2,2,3-5,4,-6,7,9,8,3];

const maxssum=(a)=>{
    let maxsum=a[0];
    let currsum=a[0];
    for(let i=1;i<a.length;i++){
        // currsum+=a[i];
        if(a[i]>currsum+a[i]){
            currsum=a[i];
        }else{
            currsum+=a[i];
        }
        maxsum=Math.max(maxsum,currsum);
    }
    console.log(maxsum);
}

maxssum(a);