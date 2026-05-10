const a=[1,2,2,1,4,3,4];

const map=new Map();

for(let i=0;i<a.length;i++){
    if(map.has(a[i])){
       map.set(a[i],map.get(a[i])+1);
    }else{
        map.set(a[i],1);
    }
}
console.log(map.keys());
console.log(map.values());
// console.log(Object.entries(map));
map.forEach((value,key)=>{
    console.log(key,value);
})