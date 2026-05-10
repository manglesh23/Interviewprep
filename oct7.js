let arr=[1, 2, 1, 3, 4, 2, 3];
let k=4;

const findDistinct=(arr,k)=>{
    let map=new Map();
    let res=[];
    for(let i=0;i<k;i++){
        map.set(arr[i],(map.get(arr[i])||0)+1)
    }
    res.push(map.size);
    for(let i=k;i<arr.length;i++){
        map.set(arr[i-k],map.get(arr[i-k])-1);
        if(map.get(arr[i-k])===0){
            map.delete(arr[i-k]);
        }
        map.set(arr[i],(map.get(arr[i])||0)+1);
        res.push(map.size);
    }
    console.log(res);
}
findDistinct(arr,k);
