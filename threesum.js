const a=[1, 0, -1, 0, -2, 2];
const target=0;

const threesum=(a,target)=>{
   a.sort((a,b)=>a-b);
    console.log(a);

    for(let i=0;i<a.length;i++){
        let left=i+1;
        let rigth=a.length-1;
        while(left<rigth){
            if(a[i]+a[left]+a[rigth]===target){
                console.log(a[i],a[left],a[rigth]);
                left++;
                rigth--;
            }else if(a[i]+a[left]+a[rigth]<target){
                left++;
            }else{
                rigth--
            }
        }
    }
}

threesum(a,target);