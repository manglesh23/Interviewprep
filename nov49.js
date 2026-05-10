let a=[1,0,1,0,1,0];
let k=2;
const getCountSumK=(a)=>{
   let prefixSum= new Map();
   prefixSum.set(0,1);
   let sum=0;
   let count=0;
   for(let i=0;i<a.length;i++){
     sum+=a[i];
     if(prefixSum.has(sum-k)){
       count+=prefixSum.get(sum-k);
     }
     prefixSum.set(sum,(prefixSum.get(sum)||0)+1);
   }
   console.log(count);
}
getCountSumK(a);