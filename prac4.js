const a=["eat","ate","seat","esat","tea"];

const group=(a)=>{
    let map=new Map();
    for(let str of a){
        let sorted= str.split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
        map.get(sorted).push(str);
    }
    console.log(Array.from(map.values()));
}

group(a);