const a=[2, -3, 4, 1, 1, 7];

const smallestMissing=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>=0){
            [a[j],a[i]]=[a[i],a[j]];
            j++;
        }
    }
    console.log(j);
    console.log(a);
    for(let k=0;k<j;k++){
        let val= Math.abs(a[k]);
        if(val>=0 && val<j){
            a[val]=-a[val];
        }
    }
    console.log(a);
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            console.log(i);
        }
    }
}

smallestMissing(a);