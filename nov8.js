let a = [1, 2, -3, 4, -4, 6, 5, -7, 8];
let k = 4;

const getCountOfSubArray=(a,k)=>{
    let map=new Map();
    let preixSum=0;
    let count=0;
    map.set(preixSum,1);
    for(let i=0;i<a.length;i++){
        preixSum+=a[i];
        if(map.has(preixSum-k)){
            count+=map.get(preixSum-k);
        }
        map.set(preixSum,(map.get(preixSum)||0)+1);
    }
    console.log(count)
}
getCountOfSubArray(a,k);