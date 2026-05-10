let a=[1,8,6,2,5,4,8,3,7];

const getMaxCont=(a)=>{
    let maxArea=0;
    let left=0;
    let right=a.length-1;

    while(left<right){
        let area=Math.min(a[left],a[right])*(right-left);
        maxArea=Math.max(area,maxArea);
        if(left<right){
            left++;
        }else{
            right--
        }
    }
    console.log(maxArea)
}
getMaxCont(a);