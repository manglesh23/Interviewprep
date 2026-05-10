const a = [1, 2, 3, 4, 5];

let sum = a.reduce((acc, num) => {
   return acc+num;
},10);

console.log(sum);


let newArray= a.map(i=>i*2);
console.log(newArray);