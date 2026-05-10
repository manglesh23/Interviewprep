const a=[10, 5, 2, 7, 1, 9];
let k=15;

const longestSubArray=(a,k)=>{
    let maxLen=0;
    let sumMap=new Map();
    let currSum=0;
    for(let i=0;i<a.length;i++){
        currSum+=a[i];

        if(currSum===k){
            maxLen=i+1;
        }
        if(sumMap.has(currSum-k)){
            maxLen=Math.max(maxLen,i-sumMap.get(currSum-k));
        }
        if(!sumMap.has(currSum)){
            sumMap.set(currSum,i);
        }
    }
    console.log("sum map:-",sumMap)
    console.log(maxLen);
}

longestSubArray(a,k);