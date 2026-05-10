const a=[2,3,-1,2,-4,5,-2,6]

const maxproduct=(a)=>{
    let minpro=a[0];
    let maxpro=a[0];
    let res=a[0];
    let start=0;
    let end=0;
    let temp=0;

    for(let i=1;i<a.length;i++){
        if(a[i]<0){
            [maxpro,minpro]=[minpro,maxpro];
        }

        if(a[i]>maxpro*a[i]){
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

    console.log(start,end,maxpro);
}

maxproduct(a);