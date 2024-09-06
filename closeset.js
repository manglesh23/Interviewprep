const a=[-1,2,1,-4];
const target=1;
const closet=(a,target)=>{
   a.sort((a,b)=>a-b);
   console.log(a);
  let v=[];
   for(let i=0;i<a.length;i++){
    let left=i+1;
    let right= a.length-1;
    let distance=Infinity;
   
    while(left<right){
        let sum= a[i]+a[left]+a[right];
        let diff= sum-target;
        if(Math.abs(diff)<distance){
            distance=Math.abs(diff);
           
            v =[a[i],a[left],a[right]]
        }
        if(sum>target){
            right--;
        }else{
            left++
        }
    }
    
   }
   console.log(v)
}

closet(a,target);