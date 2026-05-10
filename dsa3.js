const a=[1,2,4,5,3,7,6];

const findMissing=(a)=>{
    for(let i=0;i<a.length;i++){
        let val=Math.abs(a[i]);
        if(a[val-1]>0){
            a[val-1]=-a[val-1];
        }
    }
    console.log(a);
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            console.log(i+1);
            return;
        }
        if(i===a.length-1){
            console.log(a.length+1);
        }
    }
}
findMissing(a);