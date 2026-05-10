let a=[2,1,3-2,5,-4,6,7,5];

const maxSubArraySum=(a)=>{
    let maxSum=0;
    let sum=0;
    for(let i=0;i<a.length;i++){
        // sum+=a[i];
        if(a[i]>sum+a[i]){
            sum=a[i];
        }else{
            sum+=a[i];
        }
        maxSum=Math.max(maxSum,sum);
    }
    console.log(maxSum);
}

maxSubArraySum(a);