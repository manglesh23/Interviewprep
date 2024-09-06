const a = [1, 2, 3,7];
const b = [1, 2, 3, 4, 5];

const checksubset=(a,b)=>{
    let set={};
    if(a.length>b.length){
         set=new Set(a);
         return b.every(item=>set.has(item));
    }else{
        set= new Set(b);
        return a.every(item=>set.has(item));
    }
    
}

console.log(checksubset(a,b));