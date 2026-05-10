const a=[4,5,6,7,0,1,2,3];

const findElement=(a,target)=>{
    let pivot=0;
    for(let i=0;i<a.length;i++){
        if(a[i+1]<a[i]){
            pivot=i;
            break;
        }
    }
    console.log(pivot);

    if(a[0]<target && a[pivot]>target){
        console.log("find 0 to pivot");
        let left=0;
        let right=pivot;
        let pos=0;
        while(left<right){
            
            let mid= Math.floor((left+right)/2);
            console.log(mid);
            if(a[mid]===target){
             pos=mid;
             break;
            }
            else if(a[mid]<target){
                left=mid+1;
            } 
            else{
                right=mid-1;
            }
        }
        console.log("Position:-",pos);
    }else{
        console.log("find pivot+1 to n-1")
    }
}

findElement(a,6);