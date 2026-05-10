const a=[4,3,2,1,6,7,9,5];

const buysell=(a)=>{
    let maxprofit=0;
    let minprice=a[0];
    let buy=0;
    let sell=0;

    for(let i=1;i<a.length;i++){
       let profit=a[i]-minprice;
       if(profit>maxprofit){
        maxprofit=profit;
        sell=i;
       }
       if(minprice>a[i]){
        minprice=a[i];
        buy=i;
       }


    }
    console.log(buy,sell,maxprofit,a[buy],a[sell]);
}

buysell(a);