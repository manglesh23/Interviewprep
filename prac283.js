const s='{([])}]';

const checkpara=(s)=>{
    let matchIng={')':'(',']':'[','}':'{'};
    let stack=[];
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' ||s[i]==='['||s[i]==='{'){
            stack.push(s[i]);
        }
        if(s[i]===')' || s[i]===']'||s[i]==='}'){
            if(matchIng[s[i]]===stack[stack.length-1]){
                stack.pop();
                count+=2;
            }else{
                console.log("Not ");
                // return;
            }
        }
    }
    console.log(count)
    if(stack.length>0){
        console.log('not');
    }else{
        console.log("hai");
    }
}
checkpara(s);