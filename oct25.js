let a=[1,1,2,2,2,3,3,3,4];

const sortbasedonfreq=(a)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);
    }
    console.log(map);
    let sotedArray= [...map.entries()].sort((a,b)=>a[1]-b[1]);
    console.log(sotedArray)
}

sortbasedonfreq(a);