const a=[-11, -2, 3, 5,6];

const maxSumSoFar=(a)=>{
    let maxSum=0;
    let sum=0;
    for(let i=0;i<a.length;i++){
        // sum+=a[i];
        if(a[i]>=sum+a[i]){
            sum=a[i];
        }else{
            sum+=a[i];
        }
        if(sum>maxSum){
            maxSum=sum;
        }
    }
    console.log(maxSum);
}
maxSumSoFar(a);