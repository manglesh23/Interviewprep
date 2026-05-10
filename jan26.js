const a=[2,1,3,4,6,5,8];

const stockbuysell=(a)=>{
    let currprice=a[0];
    let minprice=a[0];
    let buy=0;
    let sell=0;
    let maxprofit=0;
    for(let i=1;i<a.length;i++){
        if(minprice>a[i]){
            minprice=a[i];
            buy=i;
        }
        let profit=a[i]-minprice;
        if(profit>maxprofit){
            sell=i;
            maxprofit=profit;
        }

    }
    console.log(buy,sell);
}
stockbuysell(a);