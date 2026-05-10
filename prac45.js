const a=[1,2,1,2,3,4,5,4,6];

const findmore=(a)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    map.forEach((value,key)=>{
        if(value>1){
            console.log(key);
        }
    })
}
findmore(a);