const a=[1,2,3,4,5,6,7,8];

const rearrange=(a)=>{
    let i=0;
    let j=a.length-1;
    let res=[];
    while(i<j){
        // console.log(a[j],a[i]);
        res.push(a[j]);
        res.push(a[i]);
        j--;
        i++;
      
    }
    if(a.length%2!==0){
        // console.log(a[i]);
        res.push(a[i]);
    }
    console.log(res)
}
rearrange(a);