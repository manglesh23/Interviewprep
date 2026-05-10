const str=12211;

const checkPlaindrome=(str)=>{
    let revstr=str.toString().split('').reverse().join('');
    console.log(revstr);
    if(str!=revstr){
        console.log('nahi');
    }else{
        console.log('ahi')
    }
}

checkPlaindrome(str);