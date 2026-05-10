const a=[1,2,3,4,5,6];

const subset=(a)=>{
    let res=[];
    for(let i=0;i<a.length;i++){
      let j=i;
      while(j<a.length){
        let sub=a.slice(i,j);
        j++;
        if(sub.length>0){
        res.push(sub);
        }
      }
    }
    console.log(res);
}
subset(a);