const str1="abc";
const str2="agdabcyhj";

const checksub=(str1,str2)=>{
    if(str2.includes(str1)){
        console.log("sub hai");
        console.log(str2.indexOf(str1));
        return;
    }
    console.log("nahi h");
}

checksub(str1,str2);