const a=[1,3,1,2,3,6,5,4];

const getprofit=(a)=>{
    let maxprofit=0;
    let minprice=a[0];
    let buy=0;
    let sell=0;

    for(let i=1;i<a.length;i++){
        let profit= a[i]-minprice;
        if(profit>maxprofit){
            maxprofit=profit;
            sell=i;
        }
        if(minprice>a[i]){
            minprice=a[i];
            buy=i;
        }
    }
    console.log(maxprofit,a[buy],a[sell]);
}
getprofit(a);