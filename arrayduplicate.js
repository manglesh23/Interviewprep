let a=[1,2,1,3,2,4,5,4];

const arraydup=(a)=>{
    let map= new Map();

    for(let v of a){
        if(map.get(v)){
            map.set(v,map.get(v)+1)
        }else{
            map.set(v,1)
        }
    }
    map.forEach((value,key)=>{
        if(value>1){
            console.log(key)
        }
    })
}

arraydup(a);