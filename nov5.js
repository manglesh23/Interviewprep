let a=[4,3,0,6,7,8,3];
let k=21;

const getSumofSubarray=(a,k)=>{
    let map= new Map()
    let sum=0;
    map.set(0,-1);
    for(let i=0;i<a.length;i++){
       sum+=a[i];
       if(map.has(sum-k)){
        console.log(true,map.get(sum-k)+1,i);
       }
       map.set(sum,i);
    }
    console.log(map)
}
getSumofSubarray(a,k);