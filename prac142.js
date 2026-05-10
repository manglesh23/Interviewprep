const a=[1, 2, 3, 4, 5, 2, 6,3,1];

const firstRepeat=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i])+1);
        }else{
            map.set(a[i],1);
        }
    }
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])&& map.get(a[i])>1){
            console.log(a[i]);
            return;
        }
    }


}

firstRepeat(a);