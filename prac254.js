const a=[1,-2,-3,-4,5,6,7];

const positive=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[j],a[i]]=[a[i],a[j]];
            j++;
        }
    }
    console.log(j);
    console.log(a);
}

positive(a);