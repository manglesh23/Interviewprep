let a= [2,4,5];

const getSecMaxSum=(a)=>{
    let coin=0;
    let left=0;
    a.sort((a,b)=>a-b);
    let right=a.length-2;
    while(left<right){
        coin+=a[right];
        right-=2;
        left++;
    }
    console.log(coin)
    
}

getSecMaxSum(a);