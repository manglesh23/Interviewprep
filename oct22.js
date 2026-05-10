let a=[1,-2,-3,4,-5,6,7,-8];

const rearrange=(a)=>{
    let j=0;
    for(let i=0;i<a.length;i++){
        if(a[i]<0){
            [a[i],a[j]]=[a[j],a[i]];
            j++;
        }
    }
    console.log(j,a);
    let neg=0;
    let pos=j;
    while(pos<a.length && neg<pos && a[neg]<0) {
        [a[pos],a[neg]]=[a[neg],a[pos]];
        pos++;
        neg+=2;
    }
    console.log(a);

}

rearrange(a);