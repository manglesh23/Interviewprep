const a=[1,2,3,4,5,6,7,8];

const findElement=(a,target)=>{
    let left=0;
    let right=a.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(a[mid]===target){
            console.log( mid);
            return;
        }else if(a[mid]<target){
            left++;
        }else{
            right--;
        }
    }
}
findElement(a,7);