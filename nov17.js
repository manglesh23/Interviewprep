let a=[3,5,3,4];
let k=5;

const getPairSumLessThenK=(a,k)=>{
    a.sort((a,b)=>a-b);
    let left=0;
    let right=a.length-1;
    let count=0;
    while(left<=right){
        if(a[left]+a[right]<=k){
            count++;
            left++;
            right--
        }else if(a[left]+a[right]>k){
            right--;
            count++;
        }else{
            left++;
        }
    }
    console.log(count)
}
getPairSumLessThenK(a,k);