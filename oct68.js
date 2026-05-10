let s="abcgfthyur";
let t="gfht";

const checkIfSubstringOrNot=(s,t)=>{
    let tmap= new Map();
    for(let i=0;i<t.length;i++){
        tmap.set(t[i],(tmap.get(t[i])||0)+1);
    }
    let left=0;
    let smap= new Map();
    for(let i=0;i<s.length;i++){
        if(i-left+1>t.length){
            left++;
        }
        if(compare(s.slice(left,i+1),t)){
            console.log(true);
            return;
        }
    }
    console.log(false);
}

const compare=(s,t)=>{
    if(s===t){
        return true
    }
    return false
}

checkIfSubstringOrNot(s,t);