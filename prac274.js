const a=[1, 4, 5, 7];
const b=[10, 20, 30, 40];
const k=50;
const closestPair=(a,b,k)=>{
   let mindiff=  Number.MAX_SAFE_INTEGER;
   let i=0;
   let j=b.length-1;
   let close={};
   let first=a[0];
   let second=b[0];
   while(i<a.length && j>=0){
      let diff=  a[i]+b[j]-k;
      if(mindiff>Math.abs(diff)){
        mindiff=Math.abs(diff);
        first=a[i];
        second=b[j];
      }
      if(a[i]+b[j]<k){
        i++;
      }else{
        j--;
      }
   }
   console.log(mindiff,first,second);
}

closestPair(a,b,k)