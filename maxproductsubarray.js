const a= [2,3,-2,4,-1];

const maxproduct=(a)=>{
    let maxprod=1;
    let maxcurr=1;
    let start=0;
    let end=0;
    let temp=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>maxcurr*a[i]){
            maxcurr=a[i];
            temp=i;
        }else{
            maxcurr*=a[i]
        }

        if(maxprod<maxcurr){
            maxprod=maxcurr;
            start=temp;
            end=i;
        }

    }
    console.log(start,end,maxprod);
}

maxproduct(a);