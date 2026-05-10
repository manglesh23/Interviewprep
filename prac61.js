const a=[2,1,4,3,6,7,8,9];

const threesum=(a,target)=>{
    a.sort();

    for(let i=0;i<a.length;i++){
        let left=i+1;
        let right=a.length-1;
        while(left<right){
            if(a[i]+a[left]+a[right]===target){
                console.log(a[i],a[left],a[right]);
                return;
            }else if(a[i]+a[left]+a[right]<target){
                left++;
            }else{
                right--;
            }
        }
    }
}

threesum(a,9);