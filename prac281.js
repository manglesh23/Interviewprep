const s='{([])}]';

const checkpara=(s)=>{
    let matchIng={')':'(',']':'[','}':'{'};
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' ||s[i]==='['||s[i]==='{'){
            stack.push(s[i]);
        }
        if(s[i]===')' || s[i]===']'||s[i]==='}'){
            if(matchIng[s[i]]===stack[stack.length-1]){
                stack.pop();
            }else{
                console.log("Not ");
                return;
            }
        }
    }
    if(stack.length){
        console.log('not');
    }else{
        console.log("hai");
    }
}
checkpara(s);