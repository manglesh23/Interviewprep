let str=["cat","tea","ate","tac","eat"];

const groupAnagram=(str)=>{
    let map=new Map();

    for(let v of str){
        let sortedString= v.split('').sort().join('');
        if(!map.has(sortedString)){
            map.set(sortedString,[]);
        }
        map.get(sortedString).push(v);
    }
    console.log(map.values());
}

groupAnagram(str);