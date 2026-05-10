const a=99;

const findprime=(a)=>{
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            console.log("Not Prime");
            return
        }
    }
    console.log("Prime");
}

findprime(a);