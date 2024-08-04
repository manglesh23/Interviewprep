const a=[1,2,3];
const b=[4,5];

const median=(a,b)=>{
    let c=[...a,...b];
   console.log(c);
   let l=c.length;
  
     if(l%2===0){
        console.log((c[l/2-1]+c[l/2])/2);
     }else{
        console.log(c[Math.floor(l/2)]);
     }
   
}

median(a,b);