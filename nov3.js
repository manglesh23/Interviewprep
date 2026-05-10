let a=[1,2,-3,4,-4,6,5,-7,8];

const getPrefixSum=(a)=>{
    let map= new Map();
    let sum=0;
    for(let i=0;i<a.length;i++){
       sum+=a[i];
       if(map.has(sum)){
        console.log(sum,map.get(sum));
       }
       map.set(sum,i)
    }
    console.log(map)
}
getPrefixSum(a);