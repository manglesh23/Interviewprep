let a=[0,0,1,1,2,2,2,0,1,1,0];

const arrange=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]===0){
        [a[i],a[j]]=[a[j],a[i]];
        j++
        }
    }
    console.log(j,a);
    let k=j;
    for(let i=j;i<a.length;i++){
        if(a[i]===1){
            [a[i],a[k]]=[a[k],a[i]];
            k++;
        }
    }
    console.log(a);
}

arrange(a);