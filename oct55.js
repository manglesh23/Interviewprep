let a=[15, -2, 2, -8, 1, 7, 10, 23];

const getSubarrayZeroMax=(a)=>{
    let map= new Map();

    let sum=0;
    let maxLen=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        if(sum===0){
          maxLen=i+1;
        }
        if(map.has(sum)){
            maxLen=Math.max(maxLen,i-map.get(sum));
        }else{
            map.set(sum,i);
        }
    }
    console.log(maxLen);
}

getSubarrayZeroMax(a);