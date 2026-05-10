const addtwonumber=(a,target)=>{
     a.sort((a,b)=>a-b);

     let i=0;
     let j= a.length-1;
     while(i<j){
        if(a[i]+a[j]===target){
            console.log(i,j);
            return;
        }
        if(a[i]+a[j]>target){
            j--;
        }else{
            i++;
        }
     }
}
let a=[1,2,6,4];
addtwonumber(a,6);