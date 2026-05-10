let a=[1,4,2,3,6,5,4,7,8];

let sum=9;

const findSum=(a)=>{
    let currSum=0;
    let j=0;
    let res=[];
    for(let i=0;i<a.length;i++){
        currSum+=a[i];
        while(currSum>sum){
            currSum-=a[j];
            j++;
        }
        if(currSum===sum){
            res.push([j,i]);
        }
    }
    console.log(res)
}
findSum(a);