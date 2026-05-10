let a=[1, 4, 45, 6, 0, 19];
let sum=51;

const findSumMin=(a,sum)=>{
    let currSum=0;
    let start=0;
    let end=0;
    let minLength=Infinity;
    for(let i=0;i<a.length;i++){
        currSum+=a[i];
        while(currSum>sum){
          minLength=Math.min(minLength,i-start+1);
           currSum-=a[start]
          start++;
         
        }
    }
    return minLength===Infinity?0:minLength
}

console.log(findSumMin(a,sum))