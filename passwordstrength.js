const a="abD3rerty";

const passwordstrength=(a)=>{
    if(a.length<8){
        console.log("Length Should be 8");
        return;
    }

    for(let i=0;i<a.length-1;i++){
        if(a[i]===a[i+1]){
            console.log("not strong");
            return;
        }
    }

  let hasLowerCase = /[a-z]/.test(a);  
  let hasUpperCase = /[A-Z]/.test(a);  
  let hasSpecialChar = /[^a-zA-Z0-9]/.test(a);

  if(!hasLowerCase || !hasUpperCase || !hasSpecialChar){
    console.log("Not specaail");
    return;
  }

  console.log("strng")
}

passwordstrength(a);