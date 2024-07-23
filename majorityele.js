let arr=[3,3,1,2,2,2];

const majorityelement=(arr)=>{
    let map =new Map();
    let totalele=arr.length-1;
    for(let v of arr){
        if(map.get(v)){
            map.set(v,map.get(v)+1)
        }else{
            map.set(v,1)
        }
    }
    map.forEach((value,key)=>{
        if(value>=totalele/2){
            console.log(key);
        }
    })
}

majorityelement(arr);