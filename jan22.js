const a=[4,3,2,1,8,9,6,5,4];
const b=[4,3,2,1,9,4,4];

const checksubset=(a,b)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        if(!map.has(a[i])){
            map.set(a[i],1);
        }else{
            map.set(a[i],map.get(a[i])+1);
        }
    }
    // console.log(map);

    for(let i=0;i<b.length;i++){
        if(!map.has(b[i]) || map.get(b[i])===0){
            console.log("No");
            return;
        }
        if(map.has(b[i]) && map.get(b[i])>0){
            map.set(b[i],map.get(b[i])-1);
        }
      

    }
    console.log("yes")
}

checksubset(a,b);