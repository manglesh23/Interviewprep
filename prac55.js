const a=[1,2,3,4,5,6,7,8,9];

const findpos=(a,target)=>{
    let low=0;
    let high=a.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(a[mid]===target){
            console.log(mid);
            return;
        }
        if(a[mid]<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    
}

findpos(a,2);