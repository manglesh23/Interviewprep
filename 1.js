const getData=(a)=>{
  let maxsum=0;
  let start=0;
  let end=0;
  let currsum=0;
  for(let i=0;i<a.length;i++){
    if(a[i]>currsum){
        currsum=a[i];
        start=i;
    }
    if(currsum>currsum+a[i]){
        maxsum=currsum;
        end=i;
    }
    currsum=currsum+a[i];
  }
  console.log(maxsum,start,end)
}
let a =[1,2,-4,3,5,-3,-2,6,7,8];
getData(a)