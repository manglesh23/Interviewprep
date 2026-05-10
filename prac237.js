const a=[2,2,3,3,3,4,1,1,1,15,6];

const sortByFreq=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);
    }
    console.log(map);

    let sortedArray= [...map.entries()].sort((a,b)=>b[1]-a[1]||a[0]-a[0]).flatMap(([num,freq])=>Array(freq).fill(num));
    console.log(sortedArray);

}

sortByFreq(a);
