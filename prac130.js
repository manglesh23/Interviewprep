const obj={name:"manglesh",age:"23",profession:"software developer"};

const {age,...rest}=obj;
console.log(age);
console.log(rest);
console.log(new Date());
