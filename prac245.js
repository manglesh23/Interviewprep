const a=[1, 0, 1, 2, -1, -4,-2];

const pairSum=(a)=>{
    let set= new Set(a);
    console.log(set);
    for(let i=0;i<a.length;i++){
        if(a[i]>0 && set.has(-a[i])){
            console.log(a[i],-a[i]);
            set.delete(a[i]);
            set.delete(-a[i]);
        }

        if(a[i]<0 && set.has(Math.abs(a[i]))){
            console.log(a[i],-a[i]);
            set.delete(a[i]);
            set.delete(Math.abs(a[i]));
        }
    }

}

pairSum(a);