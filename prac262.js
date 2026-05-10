const a=[-7, 9, 8, 3, 1, 1];

const closestSum=(a,sum)=>{
    a.sort((a,b)=>a-b);
    // console.log(a);
    let close=10000;
    let value=0;
    for(let i=0;i<a.length;i++){
        let j=i+1;
        let k=a.length-1;
        let diff=0;
        while(j<k){
            if(a[i]+a[j]+a[k]===sum){
                console.log(a[i],a[j],a[k]);
            }
            if(a[i]+a[j]+a[k]>sum){
                diff=a[i]+a[j]+a[k]-sum;
                if(close>Math.abs(diff)){
                    close=diff;
                    value=a[i]+a[j]+a[k]
                }
                k--
            }else{
                diff=a[i]+a[j]+a[k]-sum;
                if(close>Math.abs(diff)){
                    close=diff;
                    value=a[i]+a[j]+a[k]
                }
                j++;
            }
        }
    }
    console.log(close,value)
}
closestSum(a,2);