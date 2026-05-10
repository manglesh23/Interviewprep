let a=[0,3,0,0,2,1,0,4,5,8];

const movezero=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}
movezero(a);