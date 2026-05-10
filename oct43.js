let a= [1,4,2,-2,-9,10,2,12,2,-4,-4,-4,-4,2,6,7]

const output=(a)=>{
    let peak=a[0];
    let index=0;
    let output=[];

    for(let i=1;i<a.length;i++){
        if(a[i]*a[i-1]>0){
            if(peak<0 && a[i]<peak){
                peak=a[i];
                index=i;
            }
            if(peak>0 && a[i]>peak){
                peak=a[i];
                index=i;
            }
        }else{
            output.push([index,peak]);
            peak=a[i];
            index=i;
        }
    }
    console.log(output);

}
output(a);