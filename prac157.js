const a=[3,6,9,1,15];

const maxdiff=(a)=>{
a.sort((a,b)=>a-b);
    console.log(a);
    let max=0;
    for(let i=0;i<a.length-1;i++){
       let diff=a[i+1]-a[i];
       max=Math.max(max,diff);
    }
    console.log(max);
}

maxdiff(a);