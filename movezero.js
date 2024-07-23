const a=[1,0,2,0,0,2,0,3,0,5,9,0];

const movezero=(a)=>{
    let i=0;
    let j=a.length-1;
    while(i<j){
        if(a[i]===0 && a[j]!=0){
            [a[i],a[j]]=[a[j],a[i]]
        }else if(a[i]!=0){
            i++;
        }else{
            j--
        }
    }
    console.log(a);
}

movezero(a);