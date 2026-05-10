let s="cbaebabacd";
let p="abc";

const checkPailan=(s,p)=>{
    let smap=new Map();
    let pmap=new Map();
    let k=p.length;
    let res=[];

    for(let char of p){
        pmap.set(char,(pmap.get(char)||0)+1);
    }
    console.log(pmap);

    let left=0;
    let right=0;

    while(right<s.length){
        smap.set(s[right],(smap.get(s[right])||0)+1);

        if(right-left+1>k){
            smap.set(s[left],(smap.get(s[left])-1));
            if(smap.get(s[left])===0){
                smap.delete(s[left]);
               
            }
            left++;
        }

        if(mapEqual(smap,pmap)){
           res.push(left);
        }
        right++;
    }

    console.log(res);
}

const mapEqual=(smap,pmap)=>{
    if(smap.size!==pmap.size)
        return false;
    for(let [key,val] of smap){
        if(pmap.get(key)!==val){
            return false;
        }
    }
    return true
}

checkPailan(s,p);