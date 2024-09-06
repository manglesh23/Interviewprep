const a=[-2,-1,1,3,5,6];
let target=7;

const close=(a)=>{
    let left=0;
    let right=a.length-1;
    let distance=Infinity;
    let v=[];
    while(left<right){
        let sum=a[left]+a[right];
        let diff= sum-target;

        if(Math.abs(diff)<distance){
            distance=Math.abs(diff);
            v=[a[left],a[right]]
        }

        if(sum>target){
            right--
        }else{
            left++
        }
    }
    console.log(distance,v);
}

close(a,target);