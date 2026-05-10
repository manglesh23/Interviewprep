let a=[0,1,0,1,0,2,3,0,5,0];

const moveZero=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}
moveZero(a);