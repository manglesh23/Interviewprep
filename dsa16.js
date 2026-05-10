const words = ["the","day","is","sunny","the","the","the","sunny","is","is"];
const k = 4;

const mostFreq=(words,k)=>{
    let map=new Map();

    for(let i=0;i<words.length;i++){
        if(!map.get(words[i])){
            map.set(words[i],1);
        }else{
            map.set(words[i],map.get(words[i])+1);   
        }
    }
console.log(map);
 let sortArray=Array.from(map).sort((a,b)=>b[1]-a[1])
 let sortArrayKeys= Array.from(map).sort((a,b)=>a[0].localeCompare(b[0]));
 console.log("Sort Keys:-",sortArrayKeys)
//  console.log([...map.keys()])
//  console.log([...map.values()])
console.log(sortArray);
let keys= sortArray.map(item=>item[0]);
console.log(keys)
}
mostFreq(words,k);