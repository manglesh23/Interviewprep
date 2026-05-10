const a=[1,3,2,5,4,6];

const replace=(a)=>{
    let leftmax=[];
    leftmax[0]=a[0];
    for(let i=1;i<a.length;i++){
        leftmax[i]=Math.max(leftmax[i-1],a[i]);
    }
    console.log(leftmax);
}
replace(a);