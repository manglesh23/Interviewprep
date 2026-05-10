let a=["cat","tac","ate","eat","tea"];

const groupAnagram=(a)=>{
    let map=new Map();

    for(let v of a){
        let sorted= v.split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
        map.get(sorted).push(v);
    }
    console.log(map.values());
}

groupAnagram(a);