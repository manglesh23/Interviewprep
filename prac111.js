let a=[0,2,1,0,3,0,6,5,0,6,0,0];

const arrange=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }


   console.log(a);
    let i=0;let k=a.length-1;
    while(i<k){
        if(i%2!=0){
            [a[i],a[k]]=[a[k],a[i]];
        }
        i++;
        k--;
    }
    console.log(a);
}

arrange(a);