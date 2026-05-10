let a=[0,1,0,2,0,0,6,0,7,3,4];

const movetozero=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(a,j);
}

movetozero(a);