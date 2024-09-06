const a=1412;

const numberpalin=(a)=>{
    let str= a.toString();
    let revstr= str.split('').reverse().join('');
    if(str!=revstr){
        return 0;
    }else{
        return 1;
    }
}

console.log(numberpalin(a));