let a=[1,1,2,2,2,3,4,5];

const sortByFreq=(a)=>{
    let map=new Map();
    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);

    }
    // console.log(map);
    console.log(map.entries())
    let sortBufreq=Array.from(map.entries()).sort((a,b)=>{
        if(a[1]===b[1]){
            return b[0]-a[0]
        }else{
            return a[1]-b[1];
        }
    });
    console.log(sortBufreq);
}
sortByFreq(a);