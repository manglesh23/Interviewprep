const a=[2,7,11,12];

const findsum=(a,target)=>{
    let currsum=a[0];
    let temp=0;
    let start=0;
    let end=0;

    for(let i=1;i<a.length;i++){

       if(currsum<target){
        currsum+=a[i];
       }

       while(currsum>target && start<i-1){
        currsum=currsum-a[start];
        start++;
       }     
       if(currsum===target){
        end=i;
        break;
       }
    }
    console.log(start,end); 
}

findsum(a,30);