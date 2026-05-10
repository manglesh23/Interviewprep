
const isPrime=(a)=>{
    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            return false;
        }
    }
    return true;
}

const countprime=(lower,upper)=>{
    let count=0;
    for(let i=lower;i<=upper;i++){
        if(isPrime(i)){
            count++;
        }
    }
    console.log(count);
}

countprime(4,9);