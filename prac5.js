const a=[4,2,3,1,5,6,9,8];

const bookprofit=(a)=>{
    let minprice=a[0];
    let maxprofit=0;
    let buy=0;
    let sell=0;
    for(let i=1;i<a.length;i++){
        let profit= a[i]-minprice;
        if(profit>maxprofit){
            maxprofit=profit;
            sell=i;
        }
        if(a[i]<minprice){
            minprice=a[i];
            buy=i;
        }
    }
    console.log(buy, sell);
}

bookprofit(a);