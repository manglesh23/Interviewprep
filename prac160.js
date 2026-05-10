const strs=["ate","eat","cat","tea","tac","act","dog"];


const gropuAnagram=(strs)=>{
    let map=new Map();

    for(let i=0;i<strs.length;i++){
           let sorted= strs[i].split('').sort().join('');
           if(!map.has(sorted)){
            map.set(sorted,[]);
           }
           map.get(sorted).push(strs[i]);
    }
    console.log(map.values());
}

gropuAnagram(strs);