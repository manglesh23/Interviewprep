const a=[1,2,2,3,3,4,4,5,5];

const findsingle=(a)=>{
    let unique=0;
    for(let i=0;i<a.length;i++){
        unique^=a[i];
    }
    console.log(unique);
}

findsingle(a);