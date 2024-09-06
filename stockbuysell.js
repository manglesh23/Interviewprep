const a=[4,1,2,3,5,2,1,6];

const stock=(a)=>{
    let minPrice=a[0];
    let maxprofit=0;
    let sell=0;
    let buy=0;
    for(let i=1;i<a.length;i++){
        let profit=a[i]-minPrice;
        if(profit>maxprofit){
            maxprofit=profit;
            sell=i;
        }
        if(a[i]<minPrice){
            minPrice=a[i];
            buy=i;
        }
    }
    console.log(buy,sell,maxprofit, a[buy],a[sell]);
}

stock(a);