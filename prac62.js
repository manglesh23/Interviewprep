const a=[2,4,7,8,9];

const threeclosesum=(a,target)=>{
    a.sort();
    let closesum=Number.MAX_SAFE_INTEGER;
    console.log(closesum)
    let v1=0;
    let v2=0;
    let v3=0;
    for(let i=0;i<a.length;i++){
        let left=i+1;
        let right=a.length-1;

        while(left<right){
            if(Math.abs(a[i]+a[left]+a[right]-target)<closesum){
               v1=a[i];
               v2=a[left];
               v3=a[right];
               closesum=Math.abs(a[i]+a[left]+a[right]-target);
            }else if(a[i]+a[left]+a[right]<target){
                left++;
            }else{
                right--;
            }
        }
    }
    console.log(v1,v2,v3,closesum);
}

threeclosesum(a,12);