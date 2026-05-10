a=[1,2,3,4,5,6];
console.log(newvalue());

function newvalue(){ 
   let value= a.reduce((acc,item)=>{
    console.log(item);
    return acc*item
},2);
// console.log(value)
return value;
}






// console.log(newvalue);
