const a=[1,-1,3,4,-3,5,6,7,-2];

const findfirstpositive=(a)=>{
    let j=0;

    for(let i=0;i<a.length;i++){
        if(a[i]>0){
       [a[i],a[j]]=[a[j],a[i]];
       j++;
        }
    }
    console.log(a);
    console.log(j);

    for(let i=0;i<j;i++){
        let val=Math.abs(a[i]);
        if(val-1<j&& a[val-1]>0){
            a[val-1]=-a[val-1];
        }
    }
    console.log("New Array:-",a);
    for(let i=0;i<j;i++){
        if(a[i]>0){
            console.log(i+1);
        }
    }
    
}

findfirstpositive(a);