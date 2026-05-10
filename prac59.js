const a=[1,1,2,1,2,3,4,5,4];

const unique=(a)=>{
    let set= new Set(a);
    console.log(Array.from(set));
}
unique(a);