let a=[1,3,1,4,5,6];
let k=2;

const getKDiffPair=(a,k)=>{
    let map=new Map();

    for(let v of a){
        map.set(v, (map.get(v)||0)+1);
    }
    console.log(map);
    let count=0;
    for(let [num,freq] of map){
        if(k===0){
            if(freq>0){
                count++;
            }
        }else{
            if(map.has(num+k)){
                count++
            }
        }
    }
    console.log(count);
}

getKDiffPair(a,k);