let a=[0,1,0,2,1,0,0,2,1];

const sortZeroOnes=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]===0){
         [a[i],a[j]]=[a[j],a[i]];
         j++;
        }
    }
    
    for(let i=j;i<a.length;i++){
        if(a[i]===1){
            [a[i],a[j]]=[a[j],a[i]];
            j++
        }
    }
    console.log(j,a);
}
sortZeroOnes(a);