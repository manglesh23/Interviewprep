const a=[3,2,4,1];
let target=7;

const  findPair=(a,target)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],i);
    }
    console.log(map.keys());
    for(let i=0;i<a.length;i++){
        if(map.has(target-a[i]) && i!=map.get(target-a[i])){
            console.log(i,map.get(target-a[i]));
            return;
        }
    }
}
findPair(a,target);