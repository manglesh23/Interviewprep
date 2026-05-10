const a=[1,1,2,4,6,7,5,8];

const sunFacing=(a)=>{
    let count=1;
    let max=a[0];
    for(let i=1;i<a.length;i++){
        if(a[i]>max){
            count++;
            max=a[i];
        }
    }
    console.log(count);
}
sunFacing(a);