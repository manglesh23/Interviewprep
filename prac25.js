const a=1234;

const reverseint=(a)=>{
    let str= a.toString().split('').reverse().join('');
    console.log(Number(str));
}

reverseint(a);