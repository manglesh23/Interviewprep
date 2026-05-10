const a=[10,3,2,5,4,6,7,9,1];
const k=15;

const  subArrayofK=(a)=>{
    let currsum=a[0];
    let start=0;
    let end=0;
    let allSub=[];
    for(let i=1;i<a.length;i++){
        currsum+=a[i];
        while(currsum>k && start<i-1){
            currsum-=a[start];
            start++;
        }
        if(currsum===k){
            console.log(i);
            end=i;
            console.log("end:-",end)
            allSub.push([start,end]);
            // break;
        }
    }
    // console.log(a.slice(start,end+1));
    console.log(allSub);
}
subArrayofK(a,k);