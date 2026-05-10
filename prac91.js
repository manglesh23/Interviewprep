let s1="anagram";
let s2="naagran";

const checkanagram=(s1,s2)=>{
    if(s1.length!=s2.length){
        return 0;
    }
    let test1= s1.split('').sort().join('');
    let test2= s2.split('').sort().join('');

    console.log(test1,test2);

    if(test1!=test2){
        console.log("not");
    }else{
        console.log("yes");
    }
   
}

checkanagram(s1,s2);