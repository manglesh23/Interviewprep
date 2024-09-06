const a=[0,-1,-2,2,-6,4,-3,1];

const missingele=(a)=>{
    a.sort((a,b)=>a-b);
    console.log(a);
    let left=0;
    let right=a.length-1;
    let positive=-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(a[mid]>0){
           positive=mid;
           right=mid-1
        }else {
            left=mid+1;
        }
    }
    console.log("Positive:-",positive);
    if(a[positive]!=1){
        console.log(1);
        
    }
    for(let i=1;i<=a[a.length-1]+1;i++){
        if(i!=a[positive]){
            console.log(i);
            return;
        }else{
            positive++;
        }
    }
}

missingele(a);