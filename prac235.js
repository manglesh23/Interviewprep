const a = [1, 5, 4, 1];
let k = 1;
const distinctpair = (a, k) => {
  let map= new Map();
  for(let i=0;i<a.length;i++){
    map.set(a[i],i);
  }
//   console.log(map.has(5));
  console.log(map)
  for(let i=0;i<a.length;i++){
    if(map.has(a[i]-k)&& map.get(a[i]-k)!==i){
        console.log(a[i],a[i]-k);
        map.delete(a[i]);
    }
    if(map.has(k+a[i]) && map.get(a[i]+k)!==i){
        console.log(a[i],k+a[i]);
        map.delete(a[i]);
    }
  }
};

distinctpair(a, k);
