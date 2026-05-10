let a=[4,-4,6,2,-6,7,-2];
const getPairwithSumZero=(a)=>{
    let count=0;
    let set= new Set(a);
    console.log(set);
    for(let i=0;i<a.length;i++){
        if(set.has(Math.abs(a[i])) && a[i]<0){
            count++;
            console.log(a[i],Math.abs(a[i]))
        }
    }
    console.log(count)
}

getPairwithSumZero(a);