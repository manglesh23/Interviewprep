const a=[1,2,-3,-4,5,-6];

const maxproductsubarray=(a)=>{
    let maxproduct=a[0];
    let minproduct=a[0];
    let res=0;
    for(let i=1;i<a.length;i++){
        if(a[i]<0){
            [maxproduct,minproduct]=[minproduct,maxproduct];
        }
        maxproduct=Math.max(a[i],a[i]*maxproduct);
        minproduct=Math.min(a[i],a[i]*minproduct);

        res=Math.max(res,maxproduct);
    }
    console.log(res);
}

maxproductsubarray(a);