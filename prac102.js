const a=[1,-4,3,-2,5,6,-1,7];

const maxproduct=(a)=>{
    let maxpro=a[0];
    let curr=a[0];
    let minpro=a[0];
    let start=0;
    let end=0;
    let temp=0

    for(let i=1;i<a.length;i++){
      if(a[i]<0){
        [curr,minpro]=[minpro,curr];
      }

      if(a[i]>a[i]*curr){
        curr=a[i];
        temp=i;
      }else{
        curr=curr*a[i];
      }
      minpro=Math.min(a[i],a[i]*minpro);
      if(maxpro<curr){
        maxpro=curr;
        end=i;
        start=temp;
      }
    }
    console.log(start,end,maxpro);
}

maxproduct(a);