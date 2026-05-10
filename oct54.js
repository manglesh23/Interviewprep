let a=[15, -2, 2, -8, 1, 7, 10, 23];

const prefixSum=(a)=>{
    let map=  new Map();
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        map.set(i,sum);
    }
    console.log(map)
}
prefixSum(a);