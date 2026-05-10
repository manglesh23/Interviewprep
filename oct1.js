let a=[1,4,3,1,5,6,7,8,9];
let sum=9;
let maxLen=0
const findSubArraySum=(a,sum)=>{
    let count=0;
    let currSum=0
    let j=0;
    let start=0;
    let end=0;
    for(let i=0;i<a.length;i++){
         currSum=currSum + a[i];
        while(currSum>sum && j <i-1){
            currSum=currSum-a[j];
            j++
        }
        if(currSum==sum){
        //    console.log(j,i,currSum);
            let length=i-j+1;
       
        if(length>maxLen){
            maxLen=length;
            start=j;
            end=i;
        // console.log(maxLen);
        }
       
    }
    
}
    console.log(maxLen,start,end);
}

findSubArraySum(a,sum);