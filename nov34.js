let a=[1,-3,4,-2,6,-5,7,8];

const getMaxSum=(a)=>{
    let maxSum=0;
    let currSum=0;
    for(let i=0;i<a.length;i++){
        // currSum+=a[i];
        if(a[i]>currSum+a[i]){
            currSum=a[i];
        }else{
           currSum+=a[i];
        }
        maxSum=Math.max(maxSum,currSum);
    }
    console.log(maxSum);
}

getMaxSum(a);