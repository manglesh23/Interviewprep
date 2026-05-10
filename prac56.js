const a=[1,2,2,4];

const findmissing=(a)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
      for(let i=1;i<=a.length;i++){
        if(!map.has(i)){
            console.log("Not in:-",i);
        }
        if(map.has(i) && map.get(i)>1){
            console.log("repeat:-",i);
        }
      }
}

findmissing(a);