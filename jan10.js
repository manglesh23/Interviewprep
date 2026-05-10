const a=[1,2,3,7];
const b=[1,3,2,4,5,6];

const checksubset=(a,b)=>{
    if(a.length>b.length){
        let set=new Set(a);
        return b.every(item=>set.has(item));
    }else{
        let set= new Set(b);
        return a.every(item=>set.has(item));
    }

}

console.log(checksubset(a,b));