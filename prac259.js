const a=[1,1,2,1,2,3,2,4,5,4,6];

const rearrangeByFreq=(a)=>{
    let map= new Map();

    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);
    }
    // console.log(map);
    // console.log(map.entries());
    let newArray= [...map.entries()];
    console.log(newArray)
    let sorted= newArray.sort((a,b)=>b[1]-a[1] || a[0]-b[0]);
    console.log(sorted);

    // sorted.forEach((value,freq)=>{
    //     console.log(value[0],freq)
    // });
    for(let v of sorted){
        console.log(v[0],v[1]);
    }
}

rearrangeByFreq(a);