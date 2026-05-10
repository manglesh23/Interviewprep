let a=[1,-7,-5,3,4,-2,-5,9];

const getMax=(a)=>{
    let maxSum=0;
    let sum=0;
    let start=0;
    let end=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>sum+a[i]){
            sum=a[i];
            start=i;
        }else{
            sum+=a[i];
        }
        // maxSum=Math.max(maxSum,sum);
        if(sum>maxSum){
            maxSum=sum;
            end=i;
        }
    }
    console.log(maxSum,start,end)
}
getMax(a);