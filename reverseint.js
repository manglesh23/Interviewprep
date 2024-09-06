const x=123;

const reverseNum=(x)=>{
    let str=x.toString();
    console.log(str[0]);
    // str=str.reverse();
    console.log(typeof str);
    str= str.split('').reverse().join('');

    console.log(Number(str));

}

reverseNum(x);