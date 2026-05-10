let a=[1,2,3,4,5,6,7];

const longest=(a,k)=>{
   a.reverse();
   console.log(a);
   let getnew= a.slice(k,a.length);
   console.log(getnew);
   getnew.reverse();
   let start= a.slice(0,k);
   console.log(start);
   a=[...start,...getnew];
   console.log(a);
    
}

longest(a,3);