const str1="manglessadh";
const str="les";

const minlength=(str1,str)=>{
    let left=0;
    let right=str1.length;
    let minlength=str.length;
    while(left<right){
        let len= checkStringhas(str1.substring(left,right),str);
        minlength=Math.min(len,minlength);
    }
}

const checkStringhas=(str1,str2)=>{
    if(str1.includes(str2)){
        
    }
}