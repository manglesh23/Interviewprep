let str="abcrftgdcrf";
let t="crf"

const getfirstOcc=(str,t)=>{
    let left=0;
    for(let i=0;i<str.length;i++){
        if(i-left+1>t.length){
            left++;
        }
        if(compare(str.slice(left,i+1),t)){
            console.log(left);
            return;
        }
    }
}

const compare=(str,t)=>{
    for(let i=0;i<str.length;i++){
        if(str[i]!==t[i]){
            return false;
        }
    }
    return true;
}

getfirstOcc(str,t);