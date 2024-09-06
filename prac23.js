const a=[1,3,2,1,5,3,7,6,9];

const unsorted=(a)=>{
    let set= new Set(a);
    console.log(Array.from(set));
}

unsorted(a);