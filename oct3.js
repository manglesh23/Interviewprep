let a=[3,3,2,1,1,1,2,4,4,5];

let sortMap=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1)
        }else{
            map.set(a[i],1)
        }
}
console.log(map);

console.log([...map.entries()]);
let sorted=new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
console.log(sorted);
let result=[];
}

sortMap(a);