const str= "I like this system";

const reverseEachWord=(str)=>{
    let stack=[];
    let newStr='';
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            while(stack.length>0){
             let ele=stack.pop();
             newStr+=ele;
            }
            newStr+=' ';
        }else{
            stack.push(str[i]);
        }
    }
    while(stack.length>0){
        let ele=stack.pop();
        newStr+=ele;
    }
    console.log("New String:-",newStr);
}

reverseEachWord(str);