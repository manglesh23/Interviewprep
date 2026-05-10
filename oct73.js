let a=[1,2,1,1,2,2,3,4,4,5,6];
let k=3;

const kmostFreqNumber=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);
    }
    let sortMapByValue=[...map.entries()].sort((a,b)=>b[1]-a[1]);
    let newArray=[];
    for(let i=0;i<k;i++){
        // console.log(sortMapByValue[i][0]);
        newArray.push(...new Array(sortMapByValue[i][1]).fill(sortMapByValue[i][0]));
    }
    console.log(newArray)
}

kmostFreqNumber(a);