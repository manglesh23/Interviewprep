let a=[1,2,3,4,3];
const getRepeatedNumber=(a)=>{
    let sumofn= (a.length-1)*(a.length)/2;
    // console.log(sumofn)
    let sum=0;
    for(let v of a){
        sum+=v;
    }
    console.log(sum-sumofn)
}
getRepeatedNumber(a);