let a=[1,-2,-3,-1,4,5,2];

const findSmallestMissing=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(j,a);
    for(let i=0;i<j;i++){
        let val= Math.abs(a[i]);
        if(val-1<j && a[val-1]>0){
            a[val-1]=-a[val-1];
        }
        
    }
    console.log(a);

    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            console.log(i+1);
            return;
        }
    }
    console.log(j+1)
}
findSmallestMissing(a);