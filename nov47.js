let s="sadbutsad";
let t="sad";

const getFirstOcc=(s,t)=>{
    let left=0;

    for(let i=0;i<s.length;i++){
        if(i-left+1>t.length){
            left++;
        }
        if(i-left+1===t.length){
            if(compare(s.slice(left,i+1),t)){
                console.log(left);
                return;
            }
        }
    }
}

const compare=(s,t)=>{
    for(let i=0;i<s.length;i++){
        if(s[i]!==t[i]){
            return false;
        }
    }
    return true
}

getFirstOcc(s,t);