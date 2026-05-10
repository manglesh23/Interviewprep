let a=[1,0,1,0,1];
let k=2;

const getCount=(a,k)=>{
    let left=0;
    let count=0;
    let sum=0;
    for(let right=0;right<a.length;right++){
        sum+=a[right];
        
        if(sum>k){
            sum-=a[left];
            left++;
        }
        let temp=left;
        if(sum===k){
           while(sum===k &&temp<=right ){
            count++;
            sum-=a[temp];
            temp++
           }
        }
    }
    console.log(count)
}
getCount(a,k);