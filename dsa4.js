const a=[1,9,2,0,3,0,4,5,0,6];

const moveAllZero=(a)=>{
    let i=0;
    let j=0;
    for(i=0;i<a.length;i++){
        if(a[i]!==0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}

moveAllZero(a);