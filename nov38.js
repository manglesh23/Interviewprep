let s="abcgtfygtcr";
let t="tgc";

const getAnagramFort=(s,t)=>{
    let tmap=new Map();
    let smap=new Map();
    for(let i=0;i<t.length;i++){
        tmap.set(t[i],(tmap.get(t[i])||0)+1);
    }
    console.log(tmap);
    let left=0;
    for(let i=0;i<s.length;i++){
        smap.set(s[i],(smap.get(s[i])||0)+1)
        if(i-left+1>t.length){
            smap.set(s[left],smap.get(s[left])-1);
            if(smap.get(s[left])===0){
                smap.delete(s[left])
            }
            left++;
        }
        if(compare(tmap,smap)){
            console.log(left);
        }
    }
}

const compare=(tmap,smap)=>{
    // console.log(tmap,smap)
    if(tmap.size!==smap.size){
        return false;
    }
    for(let [key,value] of tmap){
        if(smap.get(key)!==value){
            // console.log(false,key,value)
            return false;
        }
    }
    return true;
}

getAnagramFort(s,t);