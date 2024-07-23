let a=[1,3,4,6,6,7,8];
let b=[2,3,4,5,9,10];

const union=(a,b)=>{
    let set=new Set([...a,...b]);
    console.log(set);
    let newA= Array.from(set);
    console.log(newA);
}

union(a,b); 