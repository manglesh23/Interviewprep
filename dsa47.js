const a=[0,1,2,0,0,3,14,0,5,0,6];

const movezero=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]===0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}
movezero(a);