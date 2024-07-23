let arr=[1,5,3,8,0,6];

const secondlargest=(arr)=>{
    let first=arr[0];
    let second=-1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>first){
            second=first;
            first=arr[i];
        } 
        if(arr[i]>second && arr[i]<first){
            second=arr[i];
        }
    }
    console.log(second, first)
}

secondlargest(arr);