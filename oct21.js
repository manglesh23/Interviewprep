let a=[1,-2,-3,4,-6,5,7];


const rearrange=(a)=>{
    let pos=[];
    let neg=[];

    for(let i=0;i<a.length;i++){
        if(a[i]>0){
          pos.push(a[i]);
        }else{
            neg.push(a[i]);
        }
    }
    console.log(pos,neg);
    let res=[];
    let i=0;
    let j=0;
    while(i<pos.length && j<neg.length){
        res.push(pos[i]);
        res.push(neg[j]);
        i++;
        j++;
    }
    while(i<pos.length){
        res.push(pos[i]);
        i++;
    }
    while(j<neg.length){
        res.push(neg[j]);
        j++;
    }
    console.log(res)
}

rearrange(a);