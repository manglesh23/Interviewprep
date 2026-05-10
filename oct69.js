let a=[1,4,3,2,1,6,5];
let k=9;

const getSubarrayLessThenSun=(a,k)=>{
    let left=0;
    let sum=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        while(sum>=k && left<=i){
            sum-=a[left];
            left++;
        }
        count+=i-left+1
    }
    console.log(count)
}
getSubarrayLessThenSun(a,k);