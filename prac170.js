const a=[3,2,4,5,7];
const target=10;

const findpair=(a,target)=>{
  let map=new Map();

  for(let i=0;i<a.length;i++){
    map.set(a[i],i);
  }

 for(let i=0;i<a.length;i++){
    if(map.has(target-a[i]) && i!=map.get(target-a[i])){
        console.log(i,map.get(target-a[i]));
        return;
    }
 }
}

findpair(a,target);