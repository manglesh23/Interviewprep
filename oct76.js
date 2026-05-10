let a=[-2,1,-3,4,-1,2,1,-5,4];

const getMaxSum=(a)=>{
    let currsum=a[0];
    let maxSum=a[0];
    let left=0;
    let end=0;
    for(let i=1;i<a.length;i++){
        if(a[i]>currsum+a[i]){
            currsum=a[i];
            left=i;
        }else{
            currsum+=a[i];
        }
        if(currsum>maxSum){
            maxSum=currsum;
            end=i;
        }
    }
    console.log(maxSum,[left,end]);
}
getMaxSum(a);