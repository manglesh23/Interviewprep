const a=[4,5,6,10,13];

const countTriangle=(a)=>{
    a.sort((a,b)=>a-b);
    console.log(a);
    let count=0;
    let n=a.length;
    for(let k=n-1;k>=2;k--){
        let i=0;
        let j=k-1;
        while(i<j){
            if(a[i]+a[j]>a[k]){
              count+=(j-i);
              j--;
            }else{
                i++;
            }
        }
    }
    console.log(count);
}

countTriangle(a);