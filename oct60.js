let a=[1,2,1,2,3];
let k=2;

const getAtMostKDistict=(a,k)=>{
    let map= new Map();
    let left=0;
    let count=0;
    for(let i=0;i<a.length;i++){
        map.set(a[i],(map.get(a[i])||0)+1);
        while(map.size>k){
            map.set(a[left],map.get(a[left])-1);
            if(map.get(a[left])===0){
                map.delete(a[left]);
            }
            left++;
        }
      count+=i-left+1;
    }
    console.log(count);
}

getAtMostKDistict(a,k);