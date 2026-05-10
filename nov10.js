let a = [1, 2, 2, 4, 4, 6, 5, 7, 8];
let k = 4;

const getSubArraySumK=(a,k)=>{
    let sum=0;
    let left=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        while(sum>k && left<=i){
            sum-=a[left];
            left++;
        }
        if(sum===k){
            count++;
        }
    }
    console.log(count)
}
getSubArraySumK(a,k);