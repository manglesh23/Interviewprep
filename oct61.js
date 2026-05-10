let a=[1,2,3,4,5];

const getPreFixSum=(a)=>{
    let map= new Map();
    let sum=0;
    for(let i=0;i<a.length;i++){
      sum+=a[i];
      map.set(i,sum);
    }
    console.log(new Map([...map.entries()]));


}

getPreFixSum(a);