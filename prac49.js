const a=[1,4,3,-4,5,-8,7,8,0];

const findmaxtripletproduct=(a)=>{
    a.sort();
    console.log(a);
    let max= Math.max(a[0]*a[1]*a[a.length-1],a[a.length-3]*a[a.length-2]*a[a.length-1]);
    console.log(max);
}

findmaxtripletproduct(a);