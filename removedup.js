const a=[0,0,1,1,1,2,2,3,3,4];

const remove=(a)=>{
    console.log("Origninal array:-",a)
    let j=0;
    for(let i=1;i<a.length;i++){
        if(a[i]!==a[j]){
            j++;
            a[j]=a[i];
        }
    }
    console.log("new array:-",a);
    return j+1;
}

const removefromunsorted=(b)=>{
   let set= new Set(b);
   let v=[...set];
   return v;
}
let b=[1,2,1,4,2,6,7,5,9,3];
console.log(removefromunsorted(b));
let length=remove(a);
console.log(a.slice(0,length));