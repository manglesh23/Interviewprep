const a=[1,1,2,2,3,4,4];

const singleEle=(a)=>{
    let unique=0;
    for(let v of a){
        unique^=v;
    }
    console.log(unique);
}
singleEle(a);