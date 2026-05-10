const a=[1,2,4,3,6,5];

const twosum=(a,target)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],i);
    }
    console.log(map);
    for(let i=0;i<a.length;i++){
        if(map.has(target-a[i])&& i!=map.get(target-a[i])){
            console.log(i,map.get(target-a[i]));
            return;
        }
    }
}

twosum(a,7);