const num=12121;

const checkpailan=(num)=>{
    let str= num.toString();
    let revstr= str.split('').reverse().join('');
    if(str===revstr){
        console.log("hai")
    }else{
        console.log("nahi")
    }
}

checkpailan(num);