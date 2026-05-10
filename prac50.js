const a=[1,2,3];

const minmove=(a)=>{
    a.sort();
    console.log(a);
    let step=0;
    for(let i=0;i<a.length/2;i++){
      step+=a[a.length-1-i]-a[i];
    }
    console.log(step);
}

minmove(a);