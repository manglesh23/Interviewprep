let arr=[1,3,3,4,5];

const findmissingrepeating= (arr)=>{
    for(let i=1;i<arr.length;i++){
        let findEle= arr.findIndex(v=>v===i);
        if(findEle===-1){
            console.log(i);
        }
    }

    let map= new Map();
    for(let i of arr){
        if(map.get(i)){
            map.set(i,map.get(i)+1);
        }else{
            map.set(i,1);
        }
    }
    console.log(map);
    
    map.forEach((value,key)=>{
        if(value>1){
            console.log(key);
        }
    })
}

findmissingrepeating(arr);