let a=[4,3,2,6,2,7,3,1]

const getMissingNumber=(a)=>{
    for(let i=0;i<a.length;i++){
        let index= Math.abs(a[i])-1;
        if(a[index]<0){
            continue;
        }else{
            a[index]=-a[index];
        }
    }
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            console.log(i+1);
        }
    }
}
getMissingNumber(a);