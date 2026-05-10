const s1="adfgbcnjk";
const s2="bcnj";

const findsub=(s1,s2)=>{
    const regx= new RegExp(s2);
    if(regx.test(s1)){
        let index=s1.indexOf(s2);
        console.log("substring index:-",index);
    }else{
        console.log("Not ");
    }
    
}

findsub(s1,s2);