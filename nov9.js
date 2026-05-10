let a=[23,2,6,4,7];
k = 13;
const getCounttok=(a,k)=>{
    let map=new Map();
    map.set(0,1);
    let sum=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        if(map.has(sum-k)){
            console.log(sum-k,map.get(sum-k))
            count+=map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0)+1);
    }
    console.log(map,count)
}
getCounttok(a,k);