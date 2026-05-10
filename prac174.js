const a=[1,2,1,4,3,6,4,3];

const buysell=(a)=>{
    let minprice=a[0];
    let profit=0;
    let buy=0;
    let sell=0;
    for(let i=1;i<a.length;i++){
        let curr=a[i];
        let currptofit=curr-minprice;
        if(minprice>curr){
            minprice=curr;
            buy=i;
        }
        if(currptofit>profit){
            profit=currptofit;
            sell=i;
        }
    }
    console.log(buy,sell);
    
}

buysell(a);