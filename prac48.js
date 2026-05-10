const a=["tea","ate","eat","cat","tac","set"];

const groupanagram=(a)=>{
    let map=new Map();
    for(let str of a){
        let sorted= str.split("").sort().join("");

        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
        map.get(sorted).push(str);
    }

    return Array.from(map.values());
}

console.log(groupanagram(a));