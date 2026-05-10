const a=[-2,6,-9,8,7,6,-4,7];

const maxSubArraySum=(a)=>{
    let maxsum=a[0];
    let currentsum=a[0];
    let start=0;
    let end=0;
    for(let i=1;i<a.length;i++){
       if(a[i]>currentsum+a[i]){
        currentsum=a[i];
        start=i;
       }else{
        currentsum+=a[i];
       }
       if(currentsum>maxsum){
        maxsum=currentsum;
        end=i;
       }
    }
    console.log(maxsum);
    console.log(start,end);
}
maxSubArraySum(a);