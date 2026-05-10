let a=[1,8,7,6,9,4,5];

const containerWithMostWater=(a)=>{
    let left=0;
    let max=0;
    let right=a.length-1;
    
    while(left<right){
         let h= Math.min(a[left],a[right]);
         let w=right-left;
         let area=h*w;
         max=Math.max(max,area);
         if(a[left]<a[right]){
            left++
         }else{
            right--
         }
    }
    console.log(max);

}
containerWithMostWater(a);