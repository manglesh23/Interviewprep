let s = "()[]{}}";

const validPara = (s) => {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    }else{
        if(stack.length===0){
            return false;
        }
        if(s[i]===')' && stack[stack.length-1]==='(' || s[i]==="}"&& stack[stack.length-1]==='{' || s[i]==="]" && stack[stack.length-1]==="["){
            stack.pop();
        }else{
            return false;
        }
    }
    
    i++;
  }
  console.log("--", stack);
  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

console.log(validPara(s));
