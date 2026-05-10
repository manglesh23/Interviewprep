const a=[1,-2,3,-1,-7,5,-4,6,7];

const moveNegative=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}
moveNegative(a);