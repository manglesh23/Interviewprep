const a=[3,2,5,1];

const findnumber=(a)=>{
    for(let i=0;i<a.length;i++){
        let val=Math.abs(a[i]);
        if(a[val-1]>0 && val-1<a.length)
        a[val-1]=-a[val-1];
    }
    console.log(a);
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            console.log(i+1);
        }
    }
}

findnumber(a);