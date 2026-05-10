let a=[1,2,4];
let k=3;

const getSubarraySum=(a,k)=>{
    let map=new Map();
    map.set(0,1);
    let sum=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        if(map.get(sum-k)){
           count+=map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0)+1);
    }
    console.log(count)
}
getSubarraySum(a,k);