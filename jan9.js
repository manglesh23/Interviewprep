const a=[1, 2, 3, 2, 1];


const findUniquepair=(a)=>{
    let set= new Set();

    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            let pair=[a[i],a[j]].sort((a,b)=>a-b);
            set.add(pair.toString());
        }
    }
    console.log(set);

    let unique= Array.from(set).map(pair=>pair.split(',').map(Number));
    console.log(unique);
}

findUniquepair(a);