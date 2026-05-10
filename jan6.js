const a=['tea','ate','eat','cat','tac','eta'];

const groupAnagram=(a)=>{
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
groupAnagram(a);