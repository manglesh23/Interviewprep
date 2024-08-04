const a=[1,0,3,-2,5,,6];

const firstmissing=(a)=>{
    
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a,j);

    for(let i=0;i<=j;i++){
        let val=a[i];
        if(val-1<=j && a[val-1]>0){
            a[val-1]=-a[val-1]
        }
    }
    for(let i=0;i<=j;i++){
        if(a[i]>0){
            console.log(i+1);
            return;
        }
    }

}

firstmissing(a);