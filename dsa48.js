const a=[1,2,3,4,5,6];

const moveeven=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]%2===0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a);
}
moveeven(a);