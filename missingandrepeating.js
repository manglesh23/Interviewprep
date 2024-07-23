let a=[1,2,3,3,4,6];

const findmissingandrepeating=(a)=>{
    let map=new Map();

    for(let num of a){
        if(map.get(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }

    map.forEach((value,key)=>{
        if(value>1){
            console.log("Repeating:-",key)
        }
    });
    for(let i=1;i<=a.length;i++){
        if(!map.has(i)){
            console.log("Missing ele:-",i);
        }
    }


}

findmissingandrepeating(a);