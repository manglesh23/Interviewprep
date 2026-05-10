const a=[1,4,2,3,6,5,8,7];
const k=9;
let minLength=a.length;
const sumSubarray=(a,k)=>{
    let currentSum=0;
    let start=0;
    for(let i=0;i<a.length;i++){

        // if(currentSum<k){
        //     currentSum+=a[i];
        // }
        currentSum+=a[i];

        while(currentSum>k){
            currentSum-=a[start];
            start++;
        }
       
        if(currentSum===k){
            console.log(start,i);
            minLength=Math.min(minLength,i-start+1);
        }
        // console.log(currentSum);
    }
    console.log("Min Length:-",minLength)

}
sumSubarray(a,k);