const a=[4,3,2,1,8,9,6,5,4];
const b=[4,3,2,1,9,11];

const checksubset=(a,b)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }

    for(let i=0;i<b.length;i++){
        if(!map.has(b[i])){
            console.log("not a subset");
            return;
        }else{
            map.set(b[i],map.get(b[i])-1);
        }
    }
    console.log("hai")
}

checksubset(a,b);