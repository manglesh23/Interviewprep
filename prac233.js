const str="149832";
let k=3;
const createSmallest=(str,k)=>{
    let stack=[];
    for(let i=0;i<str.length;i++){
        while(stack.length>0 && stack[stack.length-1]>Number(str[i]) && k>0){
            stack.pop();
            k--;
        }
        stack.push(Number(str[i]));
    }
    console.log(stack);
    let newStr='';
    // while(stack.length>0){
    //     newStr+=stack.pop();
    // }
    for(let i=0;i<stack.length;i++){
        newStr+=stack[i];
    }
    console.log(newStr);
}

createSmallest(str,k);