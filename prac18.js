const a=[1,2,3,4,5,6,7,8,9];

const findpair=(a)=>{
    let target=15;
    let low=0;
    let high=a.length-1;
    while(low<high){
        let sum=a[low]+a[high];
        if(sum===target){
            return[low,high];
        }else if(sum<target){
            low++;
        }else{
            high--;
        }
    }
    return -1;
}
console.log(findpair(a));