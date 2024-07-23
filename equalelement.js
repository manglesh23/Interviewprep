let a=[1,3,2,4];

const makeequal=(a)=>{
    a= a.sort((a,b)=>a-b);
    console.log(a);
    let median= a[Math.floor(a.length/2)];
    console.log(median);
    let step=0;

    for(let num of a){
      step+=Math.abs(num-median);
    }
    console.log("Number of step:-",step);
}

makeequal(a);