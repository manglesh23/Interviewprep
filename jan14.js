const a=[1,3,3,4,5,6];

const findmissingandrepeat=(a)=>{
    for(let i=0;i<a.length;i++){
        let val=Math.abs(a[i]);
        if(a[val-1]>0){
            a[val-1]=-a[val-1];
        }
    }
    console.log(a);
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            console.log(a[i],i+1);
        }
    }
}

findmissingandrepeat(a);
