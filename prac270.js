const a=[10,4,3,-2,7,6,5,9,-8];
const k=3;
const maxSumOfK=(a,k)=>{
    let currsum=0;
    let start=0;
    let end=0
    for(let i=0;i<k;i++){
        currsum+=a[i];
    }
    let max=currsum;
    for(let i=k;i<a.length;i++){
        currsum+=a[i]-a[i-k];
        // max=Math.max(max,currsum);
        if(currsum>max){
            max=currsum;
            start=i-k+1;
            end=i;
        }
    }
    console.log(max,start,end);
}
maxSumOfK(a,k);