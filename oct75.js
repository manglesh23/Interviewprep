let a=[1,2,-4,-5,6,7,3,-9,-8];

const getMaxSum=(a)=>{
    let currsum=a[0];
    let maxSum=a[0];
    for(let i=1;i<a.length;i++){
        if(a[i]>currsum+a[i]){
            currsum=a[i];
        }else{
            currsum+=a[i]
        }
        maxSum=Math.max(maxSum,currsum);
        
    }
    console.log(maxSum)
}
getMaxSum(a);