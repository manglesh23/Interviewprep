let num=1234415;

const factorial=(num)=>{
    return num<=1?1:num*factorial(num-1)
}

const countnum=(num)=>{
    let a=[];
    while(num>0){
      let digit=num%10;
      num=Math.floor(num/10);
      a.push(digit);
    }
    console.log(a);
    let freq={};
    for(let i of a){
        freq[i] = (freq[i] || 0) + 1;
    }
    console.log("repeat:-",Object.values(freq));
    let fact= factorial(a.length);
    console.log(fact);

    for(let count of Object.values(freq)){
        fact=fact/factorial(count);
    }

    console.log(fact);
}
countnum(num);