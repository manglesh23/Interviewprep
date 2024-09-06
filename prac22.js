const a=[0,-1,-2,3,2,4,7,6,8,1];

const smallest=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a,j);

    for(let i=0;i<=j;i++){
        let val=Math.abs(a[i]);
        if(val-1<=j && a[val-1]>0){
            a[val-1]=-a[val-1];
        }
    }
    for(let i=0;i<j;i++){
        if(a[i]>0){
            console.log(i+1);
            return
        }
    }
}
smallest(a);