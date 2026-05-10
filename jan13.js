const a=[0,0,-3,5,0,7,9,0,0];

const moveZeroFront=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}
moveZeroFront(a);