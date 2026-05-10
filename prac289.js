const a=[[2,80],[80,2],[90,90],[1,4],[3,5],[80,2]];

const pairSort=(a)=>{
    let newArray=Array.from(new Set(a.map(pair=>JSON.stringify(pair.sort((a,b)=>a-b)))));
    console.log(newArray.map(JSON.parse));

//    let getArray=new Set(JSON.stringify(newArray.sort((a,b)=>a[0]-b[0])));
//    console.log(getArray)
}
pairSort(a);