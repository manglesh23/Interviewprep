let a=["cat","tac","eat","ate","tea"];

const groupAnagram=(a)=>{
    let map= new Map();
    for(let i=0;i<a.length;i++){
        let sorted= a[i].split('').sort().join('');
        // console.log(sorted);
        if(!map.has(sorted)){
          map.set(sorted,[]);
        }
        map.get(sorted).push(a[i]);
    }
    console.log(map.values());
}

groupAnagram(a);