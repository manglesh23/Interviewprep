let a=["tac","cat","ate","eat","tea"];

const groupAnagram=(a)=>{
    let obj={}
    for(let v of a){
        let sorted= v.split('').sort().join('');
        if(!obj[sorted]){
            obj[sorted]=[];
        }
        obj[sorted].push(v);
    }
    console.log(obj)
}
groupAnagram(a);