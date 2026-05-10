let a= [1,0,1,0,1];

let k=2;

const getSubarrayCountSumK=(a,k)=>{
    let map = new Map();
    map.set(0,1);
    let sum=0;
    let count=0;
    for(let i=0;i<a.length;i++){
       sum+=a[i];
       if(map.has(sum-k)){
        count+=map.get(sum-k);
       }
       map.set(sum,(map.get(sum)||0)+1);
    }
    console.log(count)
}
getSubarrayCountSumK(a,k);