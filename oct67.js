let s="aabcgthycgabarf";
let t="cgba";

const getTanagramInS=(s,t)=>{
    let tmap= new Map();
    for(let i=0;i<t.length;i++){
        tmap.set(t[i],(tmap.get(t[i])||0)+1);

    }
    let left=0;
    let smap=new Map();
    let index=[];
    for(let i=0;i<s.length;i++){
        smap.set(s[i],(smap.get(s[i])||0)+1);
        if(i-left+1>t.length){
            smap.set(s[left],smap.get(s[left])-1);
            if(smap.get(s[left])===0){
                smap.delete(s[left])
            }
            left++;
        }
        if(compare(smap,tmap)){
           index.push(left);
        }
    }
    console.log(index)
}

const compare=(smap,tmap)=>{
    if(smap.size!==tmap.size){
        return false
    }
    for(let [key,value] of smap){
        if(tmap.get(key)!==value){
            return false
        }
    }
    return true
}

getTanagramInS(s,t);