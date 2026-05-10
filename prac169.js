const s="anagram";
const t="gramana";

const validanagram=(s,t)=>{
    let map= new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
    }
    console.log(map);
   for(let i=0;i<t.length;i++){
    if(map.has(t[i])){
        map.set(t[i],map.get(t[i])-1);
    }
   }
   console.log(map.values());
   for(let v of map.values()){
    if(v!=0){
        return false;
    }
   }
//    map.forEach((value,key)=>{
//     console.log(value)
//     if(value!=0){
//         return false
//     }
//    })
   return true;
}

console.log(validanagram(s,t));