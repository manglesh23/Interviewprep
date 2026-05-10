const s1="abc";
const s2="aadabychj";

const checkifsubstring=(s1,s2)=>{
    let regs=new RegExp(s1);
    if(regs.test(s2)){
        console.log("hai")
    }else{
        console.log("nahi")
    }
}

checkifsubstring(s1,s2);