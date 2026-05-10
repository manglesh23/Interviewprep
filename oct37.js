let s="aabhjytucr";
let p="bjhty";

const checkStringPartOfotherAnagram=(s,p)=>{
    let smap=new Map();
    let pmap= new Map();
    for(let char of p){
        pmap.set(char,(pmap.get(char)||0)+1);

    }
    console.log(pmap);
    let left=0;
    let right=0;
let res=[];

  while(right<s.length){
    
    smap.set(s[right],(smap.get(s[right])||0)+1);
    if(right-left+1>p.length){
        smap.set(s[left],(smap.get(s[left])-1));
        if(smap.get(s[left])===0){
            smap.delete(s[left]);
        }
        left++;
    }
      if(compareMap(smap,pmap)){
        res.push(left);
      }
      right++;
  }
  console.log(res);
}

const compareMap=(smap,pmap)=>{
    if(smap.size!==pmap.size)
        return false;
    for(let [key,value] of smap){
        if(pmap.get(key)!==value){
            return false;
        }
    }
    return true;
}

checkStringPartOfotherAnagram(s,p);