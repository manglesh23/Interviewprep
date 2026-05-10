let a=[2,3,1,5,4,7,6,5,9,8]
let k=11;

let findSubarray=(a,k)=>{
    let left=0;
    let sum=0;
    let res=[];
    for(let right=0;right<a.length;right++){
        sum+=a[right];
        while(sum>k){
            sum-=a[left];
            left++;
        }
        if(sum===k){
            res.push([left,right])
        }
    }
    console.log(res);
}
findSubarray(a,k);