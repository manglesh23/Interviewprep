const a=[1,1,1,2,2,3,3,4,5,6];

const freq=(a)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    console.log(map);
    map.forEach((value,key)=>{
        console.log(value,key);
    })
}

freq(a);