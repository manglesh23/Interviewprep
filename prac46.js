const a=[1,3,2,1,4,5,6,7,9,8,7,1];

const findmaxprofit=(a)=>{
    let minprice=a[0];
    let maxprofit=0;
    let sell=0;
    let buy=0;

    for(let i=1;i<a.length;i++){
        let profir=a[i]-minprice;
        if(profir>maxprofit){
            maxprofit=profir;
            sell=i;
        }
        if(minprice>a[i]){
            minprice=a[i];
            buy=i;
        }

    }
    console.log(maxprofit,buy,sell);
}
findmaxprofit(a);