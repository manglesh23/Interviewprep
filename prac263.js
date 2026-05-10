const a=[-8,3,6,-2,-1,4,5,-4,-7];

const rearrange=(a)=>{
    let j=0;
    let negative= a.filter(num=>num<0);
    let positve=  a.filter(num=>num>=0);
    let b=[...negative,...positve];
    // for(let i=0;i<a.length;i++){
    //     if(a[i]<0){
    //         [a[i],a[j]]=[a[j],a[i]];
    //         j++;
    //     }
    // }
    console.log(a);
    console.log(b);

}

rearrange(a);