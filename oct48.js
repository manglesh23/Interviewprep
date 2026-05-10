let a=[2,1,2];
let k=3;

const shortSum=(a,k)=>{
    let sum=0;
    let left=0;
    let minLength=a.length;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        // console.log(sum);
        while(sum>k && left<i){
            sum-=a[left];
            left++;
           minLength=Math.min(minLength,i-left+1);
        }
    }
    console.log(minLength)
    
}
shortSum(a,k);