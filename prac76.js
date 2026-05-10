const a=[3,2,4,1,10];

const bignumber=(a)=>{
   let number= a.map(String).sort((a,b)=>(b+a)-(a+b)).join('');
   console.log(number);
}
bignumber(a);