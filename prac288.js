const a=[[2,80],[80,2],[1,4],[4,1],[2,5]];

const removeDuplicate=(a)=>{
    let newArray=Array.from(new Set( a.map(pair=>JSON.stringify(pair.sort((a,b)=>a-b)))));
    
    console.log((newArray.map(JSON.parse)))
}

removeDuplicate(a);