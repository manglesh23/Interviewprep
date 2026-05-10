const a=1221;

const reversenumber=(a)=>{
    let temp=a;
   let rev=0;
   console.log(temp);
    while(temp>0){
        let digit=temp%10;
        rev=rev*10+digit;
        temp=Math.floor(temp/10);
    }
    console.log(rev);
    return rev===a?1:0;
}

console.log(reversenumber(a));