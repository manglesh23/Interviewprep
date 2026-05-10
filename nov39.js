let a=[1,1,2,-3,4,-5,6,1,2];

const getPreFixSum=(a)=>{
    let prefix=new Map();
    let sum=0;
    prefix.set(0,-1);
    for(let i=0;i<a.length;i++){
        sum+=a[i];
        if(prefix.has(sum)){
            console.log(prefix.get(sum)+1,i);
        }else{
            prefix.set(sum,i);
        }
    }
}
getPreFixSum(a);