const a=[2,3,4,5,6,1];

const countInversion=(a)=>{
    let count=0;
    for(let i=0;i<a.length;i++){
        let j=a.length-1;
        while(j>i){
            if(a[j]<a[i]){
                count++;
            }
            j--;
        }
    }
    console.log(count);
}
countInversion(a);