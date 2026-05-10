const s1="anagram";
const s2="naagram";

const checkanagram=(s1,s2)=>{
    if(s1.length!=s2.length){
        console.log("not")
        return false;
    }
    let map=new Map();
    for(let i=0;i<s1.length;i++){
        if(map.has(s1[i])){
            map.set(s1[i],map.get(s1[i])+1);
        }else{
            map.set(s1[i],1);
        }
    }
    console.log(map);
    for(let i=0;i<s2.length;i++){
        if(map.has(s2[i])){
            map.set(s2[i],map.get(s2[i])-1);
        }
        if(map.get(s2[i])===0){
            map.delete(s2[i]);
        }
    }
    console.log("New map:-",map,map.size);
    if(map.size===0){
        console.log("yes");
    }else{
        console.log("not");
    }
}

checkanagram(s1,s2);