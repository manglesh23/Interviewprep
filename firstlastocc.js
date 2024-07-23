let arr=[1, 3, 5, 5, 5, 5, 67, 123, 125];
let key=5;

const findfirstandlast=(arr,key)=>{
    let low=0;
    let high=arr.length-1;
    let result=-1;
    while(low<=high){
        let mid= Math.floor((low+high)/2);
        if(arr[mid]===key){
            result=mid;
            high=mid-1;
        }else if(arr[mid]<key){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return result;
}

const findlast=(arr,key)=>{
    let low=0;
    let high=arr.length-1;
    let result=-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]===key){
            result=mid;
            low= mid+1
        }else if(arr[mid]<key){
            low =mid+1
        }else{
            high=mid-1
        }
    }
    return result;
}

console.log("at position:-",findfirstandlast(arr,key));
console.log("at position:-",findlast(arr,key));