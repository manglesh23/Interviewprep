const a=[1,1,2,1,2,3,8,5,5];

const stockBuySell=(a)=>{
    let minprice=a[0];
    let currprice=a[0];
    let maxprofit=0;
    let sell=0;
    let buy=0;
    for(let i=1;i<a.length;i++){
        if(minprice>a[i]){
            minprice=a[i];
            buy=i;
        }
        let profit=a[i]-minprice;
        if(profit>maxprofit){
            maxprofit=profit;
            sell=i;
        }
    }
    console.log(buy,sell);
}

stockBuySell(a);