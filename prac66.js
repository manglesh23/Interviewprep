const a=6;

const factorial=(a)=>{
    let fact=1;
    while(a>0){
      fact=fact*a;
      a--;
    }
    console.log(fact);
}

factorial(a);