let a=[3,5,5,1,5];
let k=5;

const getSubarraysumLessThanK=(a,k)=>{
    let sum=0;
    let count=0;
    let i=0;
    while(i<a.length){
        sum+=a[i];
        if(sum>k){
            count++;
            sum=a[i];
        }
        i++;
    }
    console.log(count+1);
}
getSubarraysumLessThanK(a,k);