const a=[2,1,2,3,4,5,3,3,3];

const createmap=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        if(!map.get(a[i])){
            map.set(a[i],1);
        }else{
            map.set(a[i],map.get(a[i])+1);
        }
    }
    console.log(map);
    // console.log(Object.values(map))
    console.log(Array.from(map))
 let newArray=   Array.from(map).sort((a,b)=>a[1]!==b[1]?a[1]-b[1]:a[0]-b[0]);
 console.log(newArray);
}
createmap(a);