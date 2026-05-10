const a=[5, 20, 3, 2, 5, 80];
const k=78;

const findPair=(a,k)=>{
    let set=new Set(a);
    let res=[]
    for(let i=0;i<a.length;i++){
        if(set.has(a[i]+k)){
          res.push([a[i],a[i]+k]);
        }
        if(set.has(a[i]-k)){
         res.push([a[i],a[i]-k]);   
        }
    }
    console.log(res);

//   let uni=  Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
//   console.log(uni);

const unique = Array.from(
    new Set(res.map(pair => JSON.stringify(pair.sort((a, b) => a - b))))
);
console.log(JSON.parse(unique));
}

findPair(a,k);