let a=[1,0,1,0,1];
let k=2;

const getSumEqualK=(a,k)=>{
    let prefix= new Map();
    prefix.set(0,1);
    let sum=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        if(prefix.has(sum-k)){
          count+=prefix.get(sum-k);
        }
        prefix.set(sum,(prefix.get(sum)||0)+1);
    }
    console.log(count)
}
getSumEqualK(a,k);