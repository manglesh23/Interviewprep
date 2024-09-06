const a=[4,1,2,1,2];

const findOne=(a)=>{
    let unique=0;
    for(let num of a){
       unique ^=num;
    }
    console.log(unique);
}
findOne(a);