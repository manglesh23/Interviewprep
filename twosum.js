const a=[7,11,15,2];

const towsum=(a,target)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],i);
    }
    map.forEach((value,key)=>{
        let gettarget=target-value;
        if(map.has(gettarget)){
            console.log(map.get(value),map.get(gettarget))
        }
    })
}

towsum(a,9);