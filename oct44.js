let a=[1,4,3,2,5,6,8];

const moveeven=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]%2!==0){
        [a[i],a[j]]=[a[j],a[i]];
        j++;
        }
    }
    console.log(a);
}
moveeven(a);