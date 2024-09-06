const a=[1,4,2,7,8,9,0,5];
const target=15;
const findkey=(a,target)=>{
   a.sort((a,b)=>a-b);
   console.log(a);

   let i=0;
   let j=a.length-1;
   while(i<j){
    let sum=a[i]+a[j];
    if(sum===target){
        console.log(a[i],a[j]);
        i++;
        j--;
    }else if(sum<target){
        i++;
    }else{
        j--;
    }
   }
}

findkey(a,target);