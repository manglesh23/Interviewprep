const a=[4,2,1]

const nondec=(a)=>{
    let count=0;
    for(let i=0;i<a.length-1;i++){
        if(a[i]>=a[i+1]){
           count++;
        }
    }
    console.log(count);
}
nondec(a);