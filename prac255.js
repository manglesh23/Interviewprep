const a=[1,2,7,4];

const prefixSum=(a)=>{
    let res=[];
    let currSum=a[0];
    res.push(currSum);
    for(let i=1;i<a.length;i++){
        currSum+=a[i];
        res.push(currSum)
    }
    console.log(res);
}

prefixSum(a);