const a=[1,-2,2,3,-1,5,6,-4,4,8];

const findMissing=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
        [a[i],a[j]]=[a[j],a[i]];
        j++;
        }
    }
    // console.log(a,j);
    for(let i=0;i<j;i++){
        let val=Math.abs(a[i]);
        if(val-1<j && a[val-1]>0){
            a[val-1]=-a[val-1];
        }
    }
    console.log(a)
    for(let i=0;i<j;i++){
        if(a[i]>0){
            console.log(i+1);
            return;
        }
    }
}
findMissing(a);