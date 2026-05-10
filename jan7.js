const a=[1,2,1,5,4,3,7,6];

const duplicateNumber=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    console.log(map);
}

duplicateNumber(a);