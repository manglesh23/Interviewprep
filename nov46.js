let a=[1,3,2,5,4,7,6,8];
let k=14;

const getSubarraySum=(a,k)=>{
    let sum=0;
    let left=0;
    for(let i=0;i<a.length;i++){
          sum+=a[i];
        while(sum>k){
            sum-=a[left];
            left++;
        }
        if(sum===k){
            console.log(left,i);
        }
      
    }
}
getSubarraySum(a,k);