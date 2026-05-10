const a=[1,2,4,2,3];

const findDup=(a)=>{
    for(let i=0;i<a.length;i++){
        let val=Math.abs(a[i]);
        if(a[val-1]<0){
            console.log(val)
        }else{
            a[val-1]=-a[val-1];
        }
    }
    console.log(a);
}

findDup(a);