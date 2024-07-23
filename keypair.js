const a=[1,4,2,7,9,5,6,3];
let k=8;
const keypair=(a,k)=>{
    a= a.sort((a,b)=>a-b);
    console.log(a);
    let i=0;
    let j=a.length-1;
    let count=0;
    while(i<j){
        if(a[i]+a[j]===k){
            console.log(a[i],a[j]);
            i++;
            j--;
            count++;
        }else if(a[i]+a[j]>k){
            j--;
        }else{
            i++;
        }
    }
    console.log("pair:-",count)
}

keypair(a,k);