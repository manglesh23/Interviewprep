const a=[1,2,3,6,5,7,2];

const maxprofit=(a)=>{
    let minPrice=Number.MAX_SAFE_INTEGER;
    let maxProfit=0;
    for(let v of a){
        minPrice=Math.min(v, minPrice);
        maxProfit=Math.max(maxProfit, v-minPrice);
    }
    console.log(maxProfit);
}
maxprofit(a);