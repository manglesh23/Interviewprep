let arr=[6,5,6,5,8,7,7,9,5];

const findNonrepeating= (arr)=>{
    let map= new Map();
    for(let i of arr){
        if(map.get(i)){
            map.set(i,map.get(i)+1)
        }else{
            map.set(i,1);
        }
    }
    console.log(map);
    for(let i of arr){
        if(map.get(i)===1){
         console.log(i);
         break;
        }
    }
}

findNonrepeating(arr);