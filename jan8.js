const a=[1,4,2,7,9,5,6,3];
let k=8;

const  findPair=(a,k)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        if(map.has(k-a[i])){
            console.log(a[i],k-a[i]);
        }
        map.set(a[i],true);
    }
}
findPair(a,k);