const a=[3,-1,2,5,-3,-2,1];

const maxproductsub=(a)=>{
    let maxpro=a[0];
    let minpro=a[0];
    let res=a[0];
    let start=0;
    let end=0;
    let temp=0;

    for(let i=1;i<a.length;i++){
        if(a[i]<0){
            [maxpro,minpro]=[minpro,maxpro]
        }
        if(a[i]>a[i]*maxpro){
            maxpro=a[i];
            temp=i;
        }else{
            maxpro=maxpro*a[i];
        }

        minpro=Math.min(a[i],minpro*a[i]);
        if(res<maxpro){
            res=maxpro;
            start=temp;
            end=i;
        }
    }
    console.log(start,end,res);
}

maxproductsub(a);