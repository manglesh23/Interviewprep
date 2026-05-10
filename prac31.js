const a=[1,3,-2,4,-4,5,-6,6];

const findmissing=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log("J:-",j);

    for(let i=0;i<j;i++){
        let val=Math.abs(a[i]);
        if(a[val-1]>0 && val-1<j){
            a[val-1]=-a[val-1];
        }
    }
    console.log(a);
    for(let i=0;i<=j;i++){
        if(a[i]>0){
            console.log("Missing:-",i+1);
        }
    }
}

findmissing(a);