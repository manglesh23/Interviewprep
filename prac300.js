const a=[-2, 0, 1, 3];
const sum=2;

const tripletWithSmallerSum=(a,sum)=>{
    a.sort((a,b)=>a-b);
    console.log(a);
    let count=0;
    for(let i=0;i<=a.length-2;i++){
        let j=i+1;
        let k=a.length-1;
        while(j<k){
            if(a[i]+a[j]+a[k]<sum){
                console.log(a[i],a[j],a[k]);
                count+=k-j;
                j++;
            }else if(a[i]+a[j]+a[k]>=sum){
                k--;
            }
        }
    }
    console.log("Count:-",count)
}

tripletWithSmallerSum(a,sum);