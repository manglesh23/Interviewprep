const a=[1,2,4,3,6,1,8,5];

const maxprofit=(a)=>{
    let maxprofit=0;
    let minprice=a[0];
     let buy=0;
     let sell=0;
    for(let i=1;i<a.length;i++){
       let currprofit=a[i]-minprice;
       if(currprofit>maxprofit){
        maxprofit=currprofit;
        sell=i;
       }
       if(minprice>a[i]){
        minprice=a[i];
        buy=i;
       }
    }
    console.log(buy,sell,maxprofit,a[buy],a[sell]);
}

maxprofit(a);