const arr=[1,2,2,1,3,4,5];

const findduplicate= (arr)=>{
    let map = new Map();

    for(let v of arr){
        if(map.get(v)){
            map.set(v,map.get(v)+1);
        }else{
            map.set(v,1);
        }
    }
    map.forEach((value,key)=>{
        if(value>1){
            console.log(key,value);
        }
    })
}

findduplicate(arr);