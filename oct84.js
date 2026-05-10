let a=[4,2,7,6,5,0,7,1];
let k =  13;

const getLongestSubarraywithEqualToK=(a,k)=>{
    let currSum=0;
    let left=0;
    let maxLen=0;
    let start=0;
    let end=0;
    for(let i=0;i<a.length;i++){
        currSum+=a[i];
        while(currSum>k && left<=i){
            currSum-=a[left];
            left++;
        }
        if(currSum===k){
            start=left;
            end=i;
          maxLen=Math.max(maxLen,i-left+1);
        }
    }
    console.log(maxLen,start,end,a.slice(start,end+1))
}
getLongestSubarraywithEqualToK(a,k);