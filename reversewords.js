let str="hello.to.you";

const reversewords=(str)=>{
    let a= str.split(".");
    console.log(a);
    let newstr='';
    for(let i=a.length-1;i>=0;i--){
       newstr+=a[i]+"."
    }
    console.log(newstr)
}

reversewords(str);