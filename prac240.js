const a=[1,2,1,3,2,4,4,4,5,6];

const sortByFreq=(a)=>{
    let map= new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);
    }
    console.log(map);
    let sorted= [...map.entries()].sort((a,b)=>b[1]-a[1]||a[0]-b[0]).flatMap(([num,freq])=>Array(freq).fill(num));
    console.log(sorted)
}

sortByFreq(a);