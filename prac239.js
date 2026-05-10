const a=[1,2,3,4];
let res= a.map(num=>[num,num*2]).flat();
console.log(res);

let result= a.flatMap(num=>[num,num*2]);
console.log(result);